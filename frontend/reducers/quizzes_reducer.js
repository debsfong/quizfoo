import { RECEIVE_QUIZZES, REMOVE_QUIZ } from '../actions/quiz_actions';
import merge from 'lodash/merge';

const QuizzesReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUIZZES:
      return action.quizzes;
    case REMOVE_QUIZ:
      let newState = merge({}, oldState, {[action.quiz.id]: action.quiz});
      delete newState[action.quiz.id];
      return newState;
    default:
      return oldState;
  }
};

export default QuizzesReducer;
