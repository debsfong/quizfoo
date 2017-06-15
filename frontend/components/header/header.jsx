import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
      <SessionFormContainer />
    );
  }

  personalHeader(currentUser, logout) {
    return (
      <button className="header-button" onClick={logout}>Log Out</button>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser != this.props.currentUser) {
      this.redirectIfLoggedOut();
    }
  }

  redirectIfLoggedOut() {
    if (this.props.currentUser) {
      this.props.router.push("/");
    }
  }

  render() {
    return (
      <nav className="header-container">
        <div className="header-left">
          <button className="header-button" to="/quizzes">Quizfoo</button>
        </div>
        <div className="header-right">
          {this.props.currentUser ? this.personalHeader(this.props.currentUser, this.props.logout) : this.sessionLinks()}
        </div>
      </nav>
    )
  }
}

export default withRouter(Header);
