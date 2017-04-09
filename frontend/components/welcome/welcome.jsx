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
      <div>
        <div className="welcome-main">
          <p className="tagline">Making quizzes can be tedious. Quizfoo makes it easy!</p>
          <button to="/signup" className="button">Get Started</button>
        </div>
        <img className="welcome-background" src="http://res.cloudinary.com/dlbxdsfue/image/upload/v1478196715/pexels-photo-29608_ba75tb.jpg"></img>
      </div>
    );
  }
}

export default Welcome;
