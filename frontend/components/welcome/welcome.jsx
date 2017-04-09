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
        <img className="welcome-background" src="https://images.unsplash.com/photo-1475092980020-2094a10518d2?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg="></img>
      </div>
    );
  }
}

export default Welcome;
