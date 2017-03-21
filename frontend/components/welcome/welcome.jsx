import React from 'react';
import { Link } from 'react-router';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  welcomeButton() {
    return this.props.currentUser ? <Link to="/quizzes">My Quizzes</Link> : <Link to="/signup">Get Started</Link>
  }

  render() {
    return (
      <div className="welcome-background">
        <div className="welcome-box">
          <p>Making quizzes can be tedious. Quizfoo makes it easy!</p>
          <Link to="/signup" className="link">Get Started</Link>
        </div>
      </div>
    );
  }

}

export default Welcome;
