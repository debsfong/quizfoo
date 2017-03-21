import { RECEIVE_CHOICE } from '../actions/choice_actions';
import merge from 'lodash/merge';

const ChoicesReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CHOICE:
      return action.choice;
    default:
      return oldState;
  }
};

export default ChoicesReducer;
