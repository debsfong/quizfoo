export const REQUEST_QUIZZES = "REQUEST_QUIZZES";
export const REQUEST_QUIZ = "REQUEST_QUIZ";
export const RECEIVE_QUIZZES = "RECEIVE_QUIZZES";
export const RECEIVE_QUIZ = "RECEIVE_QUIZ";
export const CREATE_QUIZ = "CREATE_QUIZ";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DELETE_QUIZ = "DELETE_QUIZ";
export const REMOVE_QUIZ = "REMOVE_QUIZ";

export const requestQuizzes = () => ({
  type: REQUEST_QUIZZES
});

export const requestQuiz = (id) => ({
  type: REQUEST_QUIZ,
  id
});

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
