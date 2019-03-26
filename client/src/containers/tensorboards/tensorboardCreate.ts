import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import * as experimentActions from '../../actions/experiments';
import * as groupActions from '../../actions/groups';
import * as projectActions from '../../actions/projects';
import TensorboardCreate from '../../components/tensorboards/tensorboardCreate';
import { AppState } from '../../constants/types';
import { isTrue } from '../../constants/utils';
import { TensorboardModel } from '../../models/tensorboard';

export function mapStateToProps(state: AppState, params: any) {
  return {
    user: params.match.params.user,
    projectName: params.match.params.projectName,
    isLoading: isTrue(state.loadingIndicators.tensorboards.global.create),
    errors: state.errors.tensorboards.global.create,
  };
}

export interface DispatchProps {
  onCreate: (tensorboard: TensorboardModel) => experimentActions.ExperimentAction
    | groupActions.GroupAction
    | projectActions.ProjectAction;
}

export function mapDispatchToProps(
  dispatch: Dispatch<experimentActions.ExperimentAction | groupActions.GroupAction | projectActions.ProjectAction>,
  params: any): DispatchProps {
  let onCreate: any;
  if (params.match.experimentId) {
    onCreate = (tensorboard: TensorboardModel) => experimentActions.startTensorboard(
        params.match.params.user,
        params.match.params.projectName,
        params.match.experimentId,
        tensorboard,
        true);
  } else if (params.match.groupId) {
    onCreate = (tensorboard: TensorboardModel) => groupActions.startTensorboard(
        params.match.params.user,
        params.match.params.projectName,
        params.match.groupId,
        tensorboard,
        true);
  } else {
    onCreate = (tensorboard: TensorboardModel) => projectActions.startTensorboard(
        params.match.params.user,
        params.match.params.projectName,
        tensorboard,
        true);
  }

  return {
    onCreate: (tensorboard: TensorboardModel) => dispatch(onCreate(tensorboard)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TensorboardCreate));
