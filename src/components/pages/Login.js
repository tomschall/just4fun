import React, { Component } from 'react';

class Login extends Component {
	render() {
		const { user } = this.props;
		return (
			<React.Fragment>
				<h1>Login and Registration</h1>
				{user == null && (
					<span>
						<a href="/register" className="btn btn-outline-primary mr-2">
							Register
						</a>
						<a href="/login" className="btn btn-outline-primary mr-2">
							Log In
						</a>
					</span>
				)}
				{user && (
					<div>
						<span className="text-secondary font-weight-bold pl-1">Willkommen {user},</span>
						<a href="/" className="font-weight-bold text-primary pl-1">
							Logout
						</a>
					</div>
				)}
			</React.Fragment>
		);
	}
}
export default Login;
