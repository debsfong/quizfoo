export const REQUEST_QUESTIONS = "REQUEST_QUESTIONS";
export const REQUEST_QUESTION = "REQUEST_QUESTION";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DELETE_QUESTION = "DELETE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const UPDATE_QUESTION = "UPDATE_QUESTION";

export const requestQuestions = (quizId) => ({
  type: REQUEST_QUESTIONS,
  quizId
});

export const requestQuestion = (id) => ({
  type: REQUEST_QUESTION,
  id
});

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const createQuestion = question => ({
  type: CREATE_QUESTION,
  question
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const deleteQuestion = questionId => ({
  type: DELETE_QUESTION,
  questionId
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});

export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  question
});
