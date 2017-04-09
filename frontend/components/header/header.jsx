import React from 'react';
import { Link } from 'react-router';
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
      <button onClick={logout}>Log Out</button>
    )
  }

  render() {
    return (
      <nav className="header-container">
        <div className="header-left">
          <button to="/">Quizfoo</button>
        </div>
        <div className="header-right">
          {this.props.currentUser ? this.personalHeader(this.props.currentUser, this.props.logout) : this.sessionLinks()}
        </div>
      </nav>
    )
  }
}

export default Header;
