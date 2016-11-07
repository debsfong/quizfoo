import { RECEIVE_QUIZZES, REMOVE_QUIZ } from '../actions/quiz_actions';
import merge from 'lodash/merge';

const QuizzesReducer = (oldState=[], action) => {
  debugger;
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUIZZES:
      return action.quizzes;
    case REMOVE_QUIZ:
      let newState = [];
      for (var i = 0; i < oldState.length; i++) {
        if (oldState[i].id !== action.quiz.id) {
          newState.push(oldState[i]);
        }
      }
      return newState;
    default:
      return oldState;
  }
};

export default QuizzesReducer;
