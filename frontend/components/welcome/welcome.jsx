import React from 'react';
import { Link } from 'react-router';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    
    this.guestTeacher = this.guestTeacher.bind(this);
  }

  // welcomeButton() {
  //   return this.props.currentUser ? <Link to="/quizzes">My Quizzes</Link> : <Link to="/signup">Get Started</Link>
  // }

  guestTeacher(e) {
    e.preventDefault();
    const user = {
      user_type: "teacher",
      first_name: "Debra",
      last_name: "Fong",
      email: "debra@email.com",
      password: "password"
      };
    this.props.login({user});
  }

  render() {
    return (
      <div>
        <div className="welcome-main">
          <p className="tagline">Making quizzes can be tedious. Quizfoo makes it easy!</p>
          <button onClick={this.guestTeacher} label="Get Started">Get Started</button>
        </div>
        <img className="welcome-background" src="http://res.cloudinary.com/dlbxdsfue/image/upload/v1478196715/pexels-photo-29608_ba75tb.jpg"></img>
      </div>
    );
  }
}

export default Welcome;
