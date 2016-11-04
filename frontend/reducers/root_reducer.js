import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import QuizReducer from './quiz_reducer';
import QuizzesReducer from './quizzes_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  quizzes: QuizzesReducer,
  quiz: QuizReducer
});

export default RootReducer;
