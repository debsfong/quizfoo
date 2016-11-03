export const CREATE_QUIZ = "CREATE_QUIZ";
export const RECEIVE_QUIZ = "RECEIVE_QUIZ";

export const createQuiz = quiz => ({
  type: CREATE_QUIZ,
  quiz
});

export const receiveQuiz = quiz => ({
  type: RECEIVE_QUIZ,
  quiz
});
