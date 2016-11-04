import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import QuizReducer from './quiz_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  quiz: QuizReducer
});

export default RootReducer;
