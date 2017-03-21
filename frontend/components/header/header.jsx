import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="header-container">
    <div className="header-left">
      <Link className="link" to="/">Quizfoo</Link>
    </div>
    <div className="header-right">
      <Link className="link" to="/login">Log In</Link>
      <Link className="link" to="/signup">Sign Up</Link>
    </div>
  </nav>
);

const personalHeader = (currentUser, logout) => (
  <nav className="header-container">
    <div className="header-left">
      <Link className="link" to="/">Quizfoo</Link>
    </div>
    <div className="header-right">
      <button onClick={logout}>Log Out</button>
    </div>
  </nav>
);

const Header = ({ currentUser, logout }) => (
  currentUser ? personalHeader(currentUser, logout) : sessionLinks()
);

export default Header;
