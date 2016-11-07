import {
  receiveQuizzes,
  receiveQuiz,
  removeQuiz,
  receiveErrors,
  REQUEST_QUIZZES,
  REQUEST_QUIZ,
  CREATE_QUIZ,
  DELETE_QUIZ } from '../actions/quiz_actions';
import {
  fetchQuizzes,
  fetchQuiz,
  createQuiz,
  deleteQuiz} from '../util/quiz_api_util';

export default ({dispatch}) => next => action => {
  const QuizzesSuccess = quizzes => dispatch(receiveQuizzes(quizzes));
  const QuizSuccess = quiz => dispatch(receiveQuiz(quiz));
  const RemoveQuizSuccess = quiz => dispatch(removeQuiz(quiz));

  switch (action.type) {
    case REQUEST_QUIZZES:
      fetchQuizzes(QuizzesSuccess);
      return next(action);
    case REQUEST_QUIZ:
      fetchQuiz(action.id, QuizSuccess);
      return next(action);
    case CREATE_QUIZ:
      createQuiz(action.quiz, QuizSuccess);
      return next(action);
    case DELETE_QUIZ:
      deleteQuiz(action.id, RemoveQuizSuccess);
      return next(action);
    default:
      return next(action);
  }
};
