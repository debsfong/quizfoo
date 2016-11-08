import { connect } from 'react-redux';
import Results from './results';

const mapStateToProps = (state, ownProps) => ({
  questions: state.questions,
  quiz: state.quiz
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
