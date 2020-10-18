import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../css/App.css';

class Header extends Component {
	render() {
		const { user } = this.props;
		return (
			<header>
				<div>
					<img src={logo} className="App-logo" alt="logo" style={headerStyle} />
				</div>
				<div style={linkStyle}>
					<Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
					<Link to="/interpreting">Telephonedolmetschen</Link> | <Link to="/faq">FAQ</Link> |{' '}
					<Link to="/reviews">Kundenbewertungen</Link>
					Hello {user}
				</div>
			</header>
		);
	}
}
const headerStyle = {
	height: '100px',
	padding: '10px',
};
const linkStyle = {
	textAlign: 'right',
	color: '#000',
	fontWeight: '400',
};

export default Header;
