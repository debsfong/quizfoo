import { connect } from 'react-redux';
import { createQuiz } from '../../actions/quiz_actions';
import QuizCards from './quiz_cards';

const mapStateToProps = ({ session }) => ({
  quizzes: session.currentUser.quizzes,
  teacher_id: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCards);
