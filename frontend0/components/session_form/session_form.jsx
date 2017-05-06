import React from 'react';
import { Link, withRouter } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: "teacher",
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestTeacher = this.guestTeacher.bind(this);
    this.updateDropdown = this.updateDropdown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
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
    this.props.login({user});
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  // redirectIfLoggedIn() {
  //   if (this.props.loggedIn) {
  //     this.props.router.push("/quizzes");
  //   }
  // }

  update(field) {
    return (e) => this.setState ({
      [field]: e.target.value
    });
  }

  updateDropdown(event, index, value) {
    this.setState({user_type: value});
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
        <div>
          <br/>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      );
    } else {
      return (
        <div>
          <br/>
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signupForm() {
    if (this.props.formType === "signup") {
      return (
        <div>
          <SelectField
            disabled={false}
            floatingLabelText="I am a:"
            value={this.state.user_type}
            onChange={this.updateDropdown}>
            <MenuItem value="teacher" primaryText="Teacher" />
            <MenuItem value="student" primaryText="Student" />
          </SelectField>
          <br/>
          <TextField hintText="First Name"
            value={this.state.first_name}
            onChange={this.update("first_name")} />
          <br/>
          <TextField hintText="Last Name"
            value={this.state.last_name}
            onChange={this.update("last_name")} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="welcome-background">
        <form onSubmit={this.handleSubmit}>
          Welcome to Quizfoo!
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            {this.signupForm()}
            <TextField hintText="Email"
              value={this.state.email}
              onChange={this.update("email")} />
            <TextField hintText="Password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")} />
            <br/>
            <RaisedButton type="submit" label="Submit" />
            <br />
            <RaisedButton onClick={this.guestTeacher} label="Teacher Demo"/>
          </div>
          {this.navLink()}
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);