import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: "student",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      modalOpen: false,
      modalType: 'login'
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestTeacher = this.guestTeacher.bind(this);
    this.updateDropdown = this.updateDropdown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.modalType === 'login') {
      this.props.login({user}).then(() => this.props.router.push("/quizzes"));
    } else {
      this.props.signup({user}).then(() => this.props.router.push("/quizzes"));
    }
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

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/quizzes");
    }
  }

  update(field) {
    return (e) => this.setState ({
      [field]: e.target.value
    });
  }

  updateDropdown(event, index, value) {
    this.setState({user_type: value});
  }

  modalLink() {
    if (this.state.modalType === "login") {
      return (
        <div>
          Don't have an account? <nbsp/>
        <div className="modalLink" onClick={this.openModal.bind(this, 'signup')} value="Sign Up">Sign Up</div>
        </div>
      )
    } else {
      return (
        <div>
          Already have an account? <nbsp/>
        <div className="modalLink" onClick={this.openModal.bind(this, 'login')} value="Log In">Log In</div>
        </div>
      )
    }
  }

  openModal(modalType) {
    // event.preventDefault();
    this.setState({
      modalOpen: true,
      modalType
    })
  }

  closeModal(modalType) {
    this.setState({
      modalOpen: false
    })
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
    if (this.state.modalType === "signup") {
      return (
        <div>
          I am a: <nbsp/>
          <select>
            <option value="student" onChange={this.update("user_type")}>Student</option>
            <option value="student" onChange={this.update("user_type")}>Parent</option>
            <option value="student" onChange={this.update("user_type")}>Teacher</option>
          </select>
          <br/>
          First Name<input
            type="text"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.update("first_name")} />
          <br/>
          Last Name<input type="text" placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.update("last_name")} />
        </div>
      );
    }
  }

  render() {
    return (
        <div>
          <button onClick={this.openModal.bind(this, 'signup')}>Sign Up</button>
          <button onClick={this.openModal.bind(this, 'login')}>Log In</button>
          <Modal
            contentLabel="Modal"
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            className="session-modal"
            overlayClassName="session-modal-overlay">
            <h1>Welcome to Quizfoo!</h1>
            <br/>

            <form onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <div className="login-form">
                {this.signupForm()}
                Email<input type="text" placeholder="Email"
                  value={this.state.email}
                  onChange={this.update("email")} />
                <br />
                Password<input type="text" placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")} />
                <br/>
                <input type="submit" label="Submit" />
                <br />
              </div>
              {this.modalLink()}
              <button onClick={this.guestTeacher} label="Teacher Demo">Teacher Demo</button>
            </form>
          </Modal>

        </div>
    );
  }

}

export default withRouter(SessionForm);
