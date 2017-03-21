import { RECEIVE_RESPONSE } from '../actions/response_actions';
import merge from 'lodash/merge';

const ResponseReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RESPONSE:
      return action.response;
    default:
      return oldState;
  }
};

export default ResponseReducer;
