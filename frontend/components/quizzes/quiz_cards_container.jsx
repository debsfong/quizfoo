import { connect } from 'react-redux';
import { createQuiz, requestQuizzes, deleteQuiz } from '../../actions/quiz_actions';
import QuizCards from './quiz_cards';

const mapStateToProps = ({ session, quizzes }) => ({
  quizzes,
  teacher_id: session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestQuizzes: () => dispatch(requestQuizzes()),
  createQuiz: (quiz) => dispatch(createQuiz(quiz)),
  deleteQuiz: (id) => dispatch(deleteQuiz(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizCards);
