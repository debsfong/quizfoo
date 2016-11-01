import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "teacher",
			fname: "",
			lname: "",
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
        <div>
          Log In or <Link to="/signup">Sign Up</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Log In</Link> or Sign Up
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

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return (e) => this.setState ({
			[field]: e.currentTarget.value
		});
	}

	signupForm() {
		if (this.props.formType === "signup") {
			return (
				<div>
					<label> I am a:
						<select onChange={this.update("status")} className="login-input">
							<option value="teacher">Teacher</option>
							<option value="student">Student</option>
						</select>
					</label>
					<br/>
					<label> First Name:
						<input type="text"
							value={this.state.fname}
							onChange={this.update("fname")}
							className="login-input" />
					</label>
					<br/>
					<label> Last Name:
						<input type="text"
							value={this.state.lname}
							onChange={this.update("lname")}
							className="login-input" />
					</label>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to Quizfoo!
					<br/>
					{this.navLink()}
					{this.renderErrors()}
					<div className="login-form">
						{this.signupForm()}
						<label> Email:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
