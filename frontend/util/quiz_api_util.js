export const fetchQuizzes = (requestType) => {
  return $.ajax({
    method: 'GET',
    url: `api/quizzes`,
    data: {requestType},
  });
};

export const fetchQuiz = (id) => {
  return $.ajax({
    method: 'GET' ,
    url: `api/quizzes/${id}`,
  });
};

export const createQuiz = (quiz) => {
  return $.ajax({
    method: 'POST' ,
    url: `api/quizzes`,
    data: {quiz},
  });
};

export const deleteQuiz = (id) => {
  return $.ajax({
    method: 'DELETE' ,
    url: `api/quizzes/${id}`,
  });
};
