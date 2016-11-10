export const REQUEST_RESPONSES = "REQUEST_RESPONSES";
export const RECEIVE_RESPONSES = "RECEIVE_RESPONSES";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";
export const CREATE_RESPONSE = "CREATE_RESPONSE";
export const DELETE_RESPONSE = "DELETE_RESPONSE";
export const REMOVE_RESPONSE = "REMOVE_RESPONSE";

export const requestResponses = (questionId) => ({
  type: REQUEST_RESPONSES,
  questionId
});

export const receiveResponses = (responses) => ({
  type: RECEIVE_RESPONSES,
  responses
});

export const receiveResponse = response => ({
  type: RECEIVE_RESPONSE,
  response
});

export const createResponse = response => ({
  type: CREATE_RESPONSE,
  response
});

export const deleteResponse = responseId => ({
  type: DELETE_RESPONSE,
  responseId
});

export const removeResponse = response => ({
  type: REMOVE_RESPONSE,
  response
});
