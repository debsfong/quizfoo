import { receiveQuiz, receiveErrors, CREATE_QUIZ } from '../actions/quiz_actions';
import { createQuiz } from '../util/quiz_api_util';

export default ({dispatch}) => next => action => {
  const successCallback = quiz => dispatch(receiveQuiz(quiz));
  const errorCallback = xhr => dispatch(receiveErrors(xhr.responseJSON));

  switch (action.type) {
    case CREATE_QUIZ:
        createQuiz(action.quiz, successCallback, errorCallback);
        return next(action);
    default:
      next(action);
  }
};
