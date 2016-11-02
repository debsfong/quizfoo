export const fetchQuizzes = (success) => {
  $.ajax({
    method: 'GET' ,
    url: `api/users/`,
    success
  });
};

export const fetchQuiz = (id, success) => {
  $.ajax({
    method: 'GET' ,
    url: `api/users/${id}`,
    success
  });
};
