import React from 'react';
import { Link, withRouter } from 'react-router';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.guestTeacher = this.guestTeacher.bind(this);
  }

  guestTeacher(e) {
    e.preventDefault();
    const user = {
      user_type: "teacher",
      first_name: "Debra",
      last_name: "Fong",
      email: "debra@email.com",
      password: "password"
      };
    this.props.login({user}).then(() => this.props.router.push("/quizzes"));
  }

  render() {
    return (
      <div>
        <div className="welcome-main">
          <p className="tagline">Making quizzes can be tedious. Quizfoo makes it easy!</p>
          <button onClick={this.guestTeacher}>Teacher Demo</button>
        </div>
        <img className="welcome-background" src="http://res.cloudinary.com/dlbxdsfue/image/upload/v1478196715/pexels-photo-29608_ba75tb.jpg"></img>
      </div>
    );
  }
}

export default withRouter(Welcome);
