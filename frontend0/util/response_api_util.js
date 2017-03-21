export const createResponse = (response, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/responses',
    data: {response},
    success
  });
};
