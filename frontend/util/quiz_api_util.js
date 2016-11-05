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

export const createQuiz = (quiz, success, error) => {
  $.ajax({
    method: 'POST' ,
    url: `api/quizzes`,
    data: {quiz},
    success,
    error
  });
};

export const removeQuiz = (id, success, error) => {
  $.ajax({
    method: 'DELETE' ,
    url: `api/quizzes`,
    data: {id},
    success,
    error
  });
};
