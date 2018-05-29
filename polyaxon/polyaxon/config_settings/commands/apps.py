from ..apps import *
from ..auditor_apps import AUDITOR_APPS

PROJECT_APPS = AUDITOR_APPS + (
    'commands.apps.CommandsConfig',
    'publisher.apps.PublisherConfig',
    'scheduler.apps.SchedulerConfig',
)

INSTALLED_APPS += PROJECT_APPS
