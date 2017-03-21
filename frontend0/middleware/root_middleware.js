import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import QuizMiddleware from '../middleware/quiz_middleware';
import QuestionMiddleware from '../middleware/question_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  QuizMiddleware,
  QuestionMiddleware
);

export default RootMiddleware;
