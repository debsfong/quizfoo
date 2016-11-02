import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "teacher",
			first_name: "",
			last_name: "",
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
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      );
    } else {
      return (
        <div>
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
							value={this.state.first_name}
							onChange={this.update("first_name")}
							className="login-input" />
					</label>
					<br/>
					<label> Last Name:
						<input type="text"
							value={this.state.last_name}
							onChange={this.update("last_name")}
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
				{this.navLink()}
			</div>
		);
	}

}

export default withRouter(SessionForm);
