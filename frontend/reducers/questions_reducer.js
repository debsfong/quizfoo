import { RECEIVE_QUESTIONS, REMOVE_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionsReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return oldState;
  }
};

export default QuestionsReducer;
