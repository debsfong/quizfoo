import { connect } from 'react-redux';
import Welcome from './welcome';
import { login } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
