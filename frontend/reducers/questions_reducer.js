import { RECEIVE_QUESTIONS, REMOVE_QUESTION, RECEIVE_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

const QuestionsReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return oldState.concat(action.question);
    case REMOVE_QUESTION:
      let newState = [];
      for (var i = 0; i < oldState.length; i++) {
        if (oldState[i].id !== action.question.id) {
          newState.push(oldState[i]);
        }
      }
      return newState;
    default:
      return oldState;
  }
};

export default QuestionsReducer;
