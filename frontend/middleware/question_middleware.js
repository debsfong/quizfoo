import {
  receiveQuestions,
  receiveQuestion,
  receiveErrors,
  REQUEST_QUESTIONS,
  REQUEST_QUESTION,
  CREATE_QUESTION } from '../actions/question_actions';
import {
  fetchQuestions,
  fetchQuestion,
  createQuestion } from '../util/question_api_util';

export default ({dispatch}) => next => action => {
  const QuestionsSuccess = questions => dispatch(receiveQuestions(questions));
  const QuestionSuccess = question => dispatch(receiveQuestion(question));

  switch (action.type) {
    case REQUEST_QUESTIONS:
      fetchQuestions(action.quizId, QuestionsSuccess);
      return next(action);
    case REQUEST_QUESTION:
      fetchQuestion(QuestionSuccess);
      return next(action);
    case CREATE_QUESTION:
      createQuestion(action.question, QuestionSuccess);
      return next(action);
    default:
      return next(action);
  }
};
