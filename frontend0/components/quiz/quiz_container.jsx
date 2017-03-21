import { connect } from 'react-redux';
import { requestQuestions } from '../../actions/question_actions';
import { requestResponses } from '../../actions/response_actions';
import { requestQuiz } from '../../actions/quiz_actions';
import { createResponse } from '../../actions/response_actions';
import Quiz from './quiz';

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions,
  quiz: state.quiz,
  quizId: ownProps.params.quizId
});

const mapDispatchToProps = (dispatch) => ({
  requestQuiz: id => dispatch(requestQuiz(id)),
  requestQuestions: (quizId) => dispatch(requestQuestions(quizId)),
  requestResponses: (questionId) => dispatch(requestResponses(questionId)),
  createResponse: (response) => dispatch(createResponse(response))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
