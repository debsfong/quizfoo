import {
  RECEIVE_QUIZ,
  RECEIVE_ERRORS,
  REMOVE_QUIZ } from '../actions/quiz_actions';
import merge from 'lodash/merge';

const QuizReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUIZ:
      return merge({}, oldState, action.quiz);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {
        errors
      });
    case REMOVE_QUIZ:
      let newState = merge({}, oldState);
      delete newState[action.quiz.id];
      return newState;
    default:
      return oldState;
  }
};

export default QuizReducer;
