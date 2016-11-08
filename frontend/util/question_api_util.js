export const fetchQuestions = (quizId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/questions`,
    data: {quizId},
    success,
    error: () => console.log('error')
  });
};

export const fetchQuestion = (id, success) => {
  $.ajax({
    method: 'GET' ,
    url: `api/questions/${id}`,
    success
  });
};

export const createQuestion = (question, success, error) => {
  $.ajax({
    method: 'POST' ,
    url: `api/questions`,
    data: {question},
    success
  });
};

export const deleteQuestion = (id, success) => {
  $.ajax({
    method: 'DELETE' ,
    url: `api/questions/${id}`,
    success
  });
};

export const updateQuestion = (question, success) => {
  $.ajax({
    method: 'PATCH',
    url: `api/questions/${question.id}`,
    data: { question },
    success
  });
};
