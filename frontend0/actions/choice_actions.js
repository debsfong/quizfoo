export const REQUEST_CHOICES = "REQUEST_CHOICES";
export const RECEIVE_CHOICES = "RECEIVE_CHOICES";
export const RECEIVE_CHOICE = "RECEIVE_CHOICE";
export const CREATE_CHOICE = "CREATE_CHOICE";
export const DELETE_CHOICE = "DELETE_CHOICE";
export const REMOVE_CHOICE = "REMOVE_CHOICE";

export const requestChoices = (questionId) => ({
  type: REQUEST_CHOICES,
  questionId
});

export const receiveChoices = (choices) => ({
  type: RECEIVE_CHOICES,
  choices
});

export const receiveChoice = choice => ({
  type: RECEIVE_CHOICE,
  choice
});

export const createChoice = choice => ({
  type: CREATE_CHOICE,
  choice
});

export const deleteChoice = choiceId => ({
  type: DELETE_CHOICE,
  choiceId
});

export const removeChoice = choice => ({
  type: REMOVE_CHOICE,
  choice
});
