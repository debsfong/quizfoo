import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import QuizCards from './quiz_cards';

const mapStateToProps = ({ session }) => ({
  quizzes: session.currentUser.quizzes
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCards);
