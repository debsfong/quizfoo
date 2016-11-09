import { connect } from 'react-redux';
import { requestQuizzes } from '../../actions/quiz_actions';
import QuizIndex from './quiz_index';

const mapStateToProps = ({ quiz, quizzes }) => ({
  quiz,
  quizzes
});

const mapDispatchToProps = dispatch => ({
  requestQuizzes: () => dispatch(requestQuizzes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizIndex);
