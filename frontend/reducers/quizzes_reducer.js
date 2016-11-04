import { RECEIVE_QUIZZES } from '../actions/quiz_actions';

const QuizzesReducer = (oldState=[], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_QUIZZES:
      return action.quizzes;
    default:
      return oldState;
  }
};

export default QuizzesReducer;
