export const fetchQuizzes = success => {
  $.ajax({
    method: 'GET',
    url: `api/quizzes`,
    success,
    error: () => console.log('error')
  });
};

export const fetchQuiz = (id, success) => {
  $.ajax({
    method: 'GET' ,
    url: `api/quizzes/${id}`,
    success
  });
};

export const createQuiz = (quiz, success) => {
  $.ajax({
    method: 'POST' ,
    url: `api/quizzes`,
    data: {quiz},
    success
  });
};

export const deleteQuiz = (id, success) => {
  $.ajax({
    method: 'DELETE' ,
    url: `api/quizzes/${id}`,
    success
  });
};
