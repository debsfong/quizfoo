import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import QuizReducer from './quiz_reducer';
import QuizzesReducer from './quizzes_reducer';
import QuestionsReducer from './questions_reducer';
import ResponseReducer from './response_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  quizzes: QuizzesReducer,
  quiz: QuizReducer,
  questions: QuestionsReducer,
  response: ResponseReducer
});

export default RootReducer;
