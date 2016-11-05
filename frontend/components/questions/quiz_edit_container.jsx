import { connect } from 'react-redux';
import { createQuestion, requestQuestions } from '../../actions/question_actions';
import QuizEdit from './quiz_edit';

const mapStateToProps = ({ questions }, ownProps ) => ({
  questions,
  quizId: parseInt(ownProps.params.quizId)
});

const mapDispatchToProps = dispatch => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  requestQuestions: (quizId) => dispatch(requestQuestions(quizId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizEdit);
