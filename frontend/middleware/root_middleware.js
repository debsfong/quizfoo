import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import QuizMiddleware from '../middleware/quiz_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  QuizMiddleware
);

export default RootMiddleware;
