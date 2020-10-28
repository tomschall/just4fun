import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	render() {
		const { user, logOutUser } = this.props;

		return (
			<div className="text-center mt-4  mr-2">
				{!user && (
					<Link className="nav-item nav-link" to="/login">
						login
					</Link>
				)}
				{!user && (
					<Link className="nav-item nav-link" to="/register">
						<FaUsers className="mr-1" />
						register
					</Link>
				)}
				{user && (
					<Link 
						className="nav-item nav-link" 
						to="/login"
						onClick={e => logOutUser(e)}
					>
						logout
					</Link>
				)}
        {user && (
					<Link className="nav-item nav-link" to="/welcome">
						Welcome { user }
					</Link>
				)}
			</div>
		);
	}
}

export default Navigation;
