import { connect } from 'react-redux';
import { requestQuestions } from '../../actions/question_actions';
import { requestQuiz } from '../../actions/quiz_actions';
import Quiz from './quiz';

const mapStateToProps = (state) => ({
  questions: state.questions,
  quiz: state.quiz,
  quizId: state.quiz.id
});

const mapDispatchToProps = (dispatch) => ({
  requestQuiz: id => dispatch(requestQuiz(id)),
  requestQuestions: (quizId) => dispatch(requestQuestions(quizId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
