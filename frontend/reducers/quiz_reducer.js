import {
  RECEIVE_QUIZZES,
  RECEIVE_QUIZ,
  RECEIVE_ERRORS } from '../actions/quiz_actions';
import merge from 'lodash/merge';

const QuizReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUIZZES:
      return action.quizzes;
    case RECEIVE_QUIZ:
      const newQuiz = {[action.quiz.id]: action.quiz};
      return merge({}, oldState, newQuiz);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, oldState, {
        errors
      });
    default:
      return oldState;
  }
};
