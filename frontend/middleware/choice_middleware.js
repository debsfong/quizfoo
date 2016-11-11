import { CREATE_CHOICE, receiveChoice } from '../actions/choice_actions';
import { createChoice } from '../util/choice_api_util';

export default ({dispatch}) => next => action => {
  const ChoiceSuccess = choice => dispatch(receiveChoice(choice));

  switch (action.type) {
    case CREATE_CHOICE:
      createChoice(action.choice, ChoiceSuccess);
      return next(action);
    default:
      return next(action);
  }
};
