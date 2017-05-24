import * as APIUtil from '../util/quiz_api_util';

export const RECEIVE_QUIZZES = "RECEIVE_QUIZZES";
export const RECEIVE_QUIZ = "RECEIVE_QUIZ";
export const CREATE_QUIZ = "CREATE_QUIZ";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DELETE_QUIZ = "DELETE_QUIZ";
export const REMOVE_QUIZ = "REMOVE_QUIZ";

export const requestQuizzes = () => dispatch => (
  APIUtil.fetchQuizzes()
    .then(quizzes => dispatch(receiveQuizzes(quizzes)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestQuiz = (id) => dispatch => (
  APIUtil.fetchQuiz(id)
    .then(quiz => dispatch(receiveQuizzes(quiz)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveQuizzes = quizzes => ({
  type: RECEIVE_QUIZZES,
  quizzes
});

export const receiveQuiz = quiz => ({
  type: RECEIVE_QUIZ,
  quiz
});

export const createQuiz = (quiz) => ({
  type: CREATE_QUIZ,
  quiz
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const deleteQuiz = id => ({
  type: DELETE_QUIZ,
  id
});

export const removeQuiz = quiz => ({
  type: REMOVE_QUIZ,
  quiz
});
