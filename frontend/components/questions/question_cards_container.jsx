import { connect } from 'react-redux';
import { createQuestion, requestQuestions, deleteQuestion } from '../../actions/question_actions';
import { requestQuiz } from '../../actions/quiz_actions';
import QuestionCards from './question_cards';

const mapStateToProps = (state, ownProps ) => ({
  questions: state.questions,
  quiz: state.quiz
});

const mapDispatchToProps = dispatch => ({
  requestQuiz: id => dispatch(requestQuiz(id)),
  createQuestion: (question) => dispatch(createQuestion(question)),
  requestQuestions: (quizId) => dispatch(requestQuestions(quizId)),
  deleteQuestion: (id) => dispatch(deleteQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionCards);
