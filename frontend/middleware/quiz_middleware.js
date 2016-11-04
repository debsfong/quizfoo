import {
  receiveQuizzes,
  receiveQuiz,
  receiveErrors,
  REQUEST_QUIZZES,
  REQUEST_QUIZ,
  CREATE_QUIZ } from '../actions/quiz_actions';
import {
  fetchQuizzes,
  fetchQuiz,
  createQuiz } from '../util/quiz_api_util';

export default ({dispatch}) => next => action => {
  const QuizzesSuccess = quizzes => dispatch(receiveQuizzes(quizzes));
  const QuizSuccess = quiz => dispatch(receiveQuiz(quiz));

  switch (action.type) {
    case REQUEST_QUIZZES:
      fetchQuizzes(QuizzesSuccess);
      return next(action);
    case REQUEST_QUIZ:
      fetchQuiz(QuizSuccess);
      return next(action);
    case CREATE_QUIZ:
      createQuiz(action.quiz, QuizSuccess);
      return next(action);
    default:
      return next(action);
  }
};
