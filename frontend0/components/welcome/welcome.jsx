import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';


class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  welcomeButton() {
    if (this.props.currentUser) {
      return (
        <Link to="/quizzes"><RaisedButton label="My Quizzes" /></Link>
      );
    } else {
      return (
        <Link to="/signup"><RaisedButton label="Get Started" /></Link>
      );
    }
  }

  render() {
    return (
      <div className="welcome-background">
        <div className="welcome-box">
          Making quizzes can be tedious. Quizfoo makes it easy!
          <br/>
          <br/>
          {this.welcomeButton()}
        </div>
      </div>
    );
  }

}

export default Welcome;
