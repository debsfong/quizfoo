import { connect } from 'react-redux';
import { createQuiz, requestQuizzes } from '../../actions/quiz_actions';
import QuizCards from './quiz_cards';

const mapStateToProps = ({ session, quizzes }) => ({
  quizzes,
  teacher_id: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  createQuiz: (quiz) => dispatch(createQuiz(quiz)),
  requestQuizzes: () => dispatch(requestQuizzes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCards);
