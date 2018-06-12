import logging
import mimetypes
import os

from wsgiref.util import FileWrapper

from rest_framework import status
from rest_framework.exceptions import ValidationError
from rest_framework.generics import (
    CreateAPIView,
    RetrieveAPIView,
    RetrieveUpdateDestroyAPIView,
    get_object_or_404
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from django.http import StreamingHttpResponse

import auditor

from api.jobs.serializers import (
    JobCreateSerializer,
    JobDetailSerializer,
    JobSerializer,
    JobStatusSerializer
)
from api.utils.views import AuditorMixinView, ListCreateAPIView
from db.models.jobs import Job, JobStatus
from event_manager.events.job import (
    JOB_CREATED,
    JOB_DELETED_TRIGGERED,
    JOB_LOGS_VIEWED,
    JOB_RESTARTED_TRIGGERED,
    JOB_STATUSES_VIEWED,
    JOB_STOPPED_TRIGGERED,
    JOB_UPDATED,
    JOB_VIEWED
)
from event_manager.events.project import PROJECT_JOBS_VIEWED
from libs.paths.jobs import get_job_logs_path
from libs.permissions.projects import get_permissible_project
from libs.spec_validation import validate_job_spec_config
from libs.utils import to_bool
from polyaxon.celery_api import app as celery_app
from polyaxon.settings import SchedulerCeleryTasks

_logger = logging.getLogger("polyaxon.views.jobs")


class ProjectJobListView(ListCreateAPIView):
    """List/Create an job under a project"""
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    create_serializer_class = JobCreateSerializer
    permission_classes = (IsAuthenticated,)

    def filter_queryset(self, queryset):
        project = get_permissible_project(view=self)
        auditor.record(event_type=PROJECT_JOBS_VIEWED,
                       instance=project,
                       actor_id=self.request.user.id)
        return queryset.filter(project=project)

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user, project=get_permissible_project(view=self))

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = self.perform_create(serializer)
        auditor.record(event_type=JOB_CREATED, instance=instance)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class JobDetailView(AuditorMixinView, RetrieveUpdateDestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobDetailSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = 'sequence'
    instance = None
    get_event = JOB_VIEWED
    update_event = JOB_UPDATED
    delete_event = JOB_DELETED_TRIGGERED

    def filter_queryset(self, queryset):
        return queryset.filter(project=get_permissible_project(view=self))


class JobCloneView(CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = 'sequence'
    event_type = None

    def filter_queryset(self, queryset):
        return queryset.filter(project=get_permissible_project(view=self))

    def clone(self, obj, config, update_code_reference, description):
        pass

    def post(self, request, *args, **kwargs):
        obj = self.get_object()
        auditor.record(event_type=self.event_type,
                       instance=obj,
                       actor_id=self.request.user.id)

        description = None
        config = None
        update_code_reference = False
        if 'config' in request.data:
            spec = validate_job_spec_config(
                [obj.specification.parsed_data, request.data['config']], raise_for_rest=True)
            config = spec.parsed_data
        if 'update_code' in request.data:
            try:
                update_code_reference = to_bool(request.data['update_code'])
            except TypeError:
                raise ValidationError('update_code should be a boolean')
        if 'description' in request.data:
            description = request.data['description']
        new_obj = self.clone(obj=obj,
                             config=config,
                             update_code_reference=update_code_reference,
                             description=description)
        serializer = self.get_serializer(new_obj)
        return Response(status=status.HTTP_201_CREATED, data=serializer.data)


class JobRestartView(JobCloneView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = 'sequence'
    event_type = JOB_RESTARTED_TRIGGERED

    def clone(self, obj, config, update_code_reference, description):
        return obj.restart(user=self.request.user,
                           config=config,
                           update_code_reference=update_code_reference,
                           description=description)


class JobViewMixin(object):
    """A mixin to filter by job."""
    project = None
    job = None

    def get_job(self):
        # Get project and check access
        self.project = get_permissible_project(view=self)
        sequence = self.kwargs['job_sequence']
        self.job = get_object_or_404(Job, project=self.project, sequence=sequence)
        return self.job

    def filter_queryset(self, queryset):
        queryset = super(JobViewMixin, self).filter_queryset(queryset)
        return queryset.filter(job=self.get_job())


class JobStatusListView(JobViewMixin, ListCreateAPIView):
    queryset = JobStatus.objects.all()
    serializer_class = JobStatusSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(job=self.get_job())

    def get(self, request, *args, **kwargs):
        response = super(JobStatusListView, self).get(request, *args, **kwargs)
        auditor.record(event_type=JOB_STATUSES_VIEWED,
                       instance=self.job,
                       actor_id=request.user.id)
        return response


class JobStatusDetailView(JobViewMixin, RetrieveAPIView):
    queryset = JobStatus.objects.all()
    serializer_class = JobStatusSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = 'uuid'


class JobLogsView(JobViewMixin, RetrieveAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        job = self.get_job()
        auditor.record(event_type=JOB_LOGS_VIEWED,
                       instance=self.job,
                       actor_id=request.user.id)
        log_path = get_job_logs_path(job.unique_name)

        filename = os.path.basename(log_path)
        chunk_size = 8192
        try:
            wrapped_file = FileWrapper(open(log_path, 'rb'), chunk_size)
            response = StreamingHttpResponse(wrapped_file,
                                             content_type=mimetypes.guess_type(log_path)[0])
            response['Content-Length'] = os.path.getsize(log_path)
            response['Content-Disposition'] = "attachment; filename={}".format(filename)
            return response
        except FileNotFoundError:
            _logger.warning('Log file not found: log_path=%s', log_path)
            return Response(status=status.HTTP_404_NOT_FOUND,
                            data='Log file not found: log_path={}'.format(log_path))


class JobStopView(CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = 'sequence'

    def filter_queryset(self, queryset):
        return queryset.filter(project=get_permissible_project(view=self))

    def post(self, request, *args, **kwargs):
        obj = self.get_object()
        auditor.record(event_type=JOB_STOPPED_TRIGGERED,
                       instance=obj,
                       target='project',
                       actor_id=request.user.id)
        celery_app.send_task(
            SchedulerCeleryTasks.JOBS_STOP,
            kwargs={
                'project_name': obj.project.unique_name,
                'project_uuid': obj.project.uuid.hex,
                'job_name': obj.unique_name,
                'job_uuid': obj.unique_name,
                'specification': obj.specification,
                'update_status': True
            })
        return Response(status=status.HTTP_200_OK)
