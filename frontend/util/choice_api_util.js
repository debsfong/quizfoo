export const createChoice = (choice, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/choices',
    data: {choice},
    success
  });
};
