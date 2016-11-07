import { connect } from 'react-redux';
import { createQuestion, requestQuestions } from '../../actions/question_actions';
import { requestQuiz } from '../../actions/quiz_actions';
import QuizEdit from './quiz_edit';

const mapStateToProps = (state, ownProps ) => ({
  questions: state.questions,
  quiz: state.quiz
});

const mapDispatchToProps = dispatch => ({
  requestQuiz: id => dispatch(requestQuiz(id)),
  createQuestion: (question) => dispatch(createQuestion(question)),
  requestQuestions: (quizId) => dispatch(requestQuestions(quizId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizEdit);
