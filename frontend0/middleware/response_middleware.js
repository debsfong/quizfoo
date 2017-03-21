import { CREATE_RESPONSE, receiveResponse } from '../actions/response_actions';
import { createResponse } from '../util/response_api_util';

export default ({dispatch}) => next => action => {
  const ResponseSuccess = response => dispatch(receiveResponse(response));

  switch (action.type) {
    case CREATE_RESPONSE:
      createResponse(action.response, ResponseSuccess);
      return next(action);
    default:
      return next(action);
  }
};
