import { connect } from 'react-redux';
import Results from './results';
import { requestQuiz } from '../../actions/quiz_actions';
import { requestQuestions } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions,
  quiz: state.quiz
});

const mapDispatchToProps = dispatch => ({
  requestQuiz: id => dispatch(requestQuiz(id)),
  requestQuestions: (quizId) => dispatch(requestQuestions(quizId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
