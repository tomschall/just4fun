import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {signInUser} from '../services/Firebase';
import FormError from './FormError';

import messages from './messages';

const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		'&:hover': {
			color: 'white',
		},
		background: 'linear-gradient(45deg, #F7931E, #009444, #F15A24)',
		textTransform: 'none',
	},
});

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errorMessage: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const itemName = e.target.name;
		const itemValue = e.target.value;

		this.setState({ [itemName]: itemValue });
	}

	handleSubmit = async (e) =>{
		let registrationInfo = {
			email: this.state.email,
			password: this.state.password,
		};
		e.preventDefault();
		try {
			await signInUser(registrationInfo);
			this.props.history.push('/appointments')
		} catch(error){
			console.log('Firebase Error:', error.code, error);

			if (error.message !== null) {
				let errorMessage = messages[error.code] || error.message;
				this.setState({ errorMessage });
			} else {
				this.setState({ errorMessage: null });
			}
		};
	};
	
	render() {
		const { classes } = this.props;
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
					</Typography>
					<form className={classes.form} noValidate onSubmit={this.handleSubmit}>
						{this.state.errorMessage !== null ? <FormError theMessage={this.state.errorMessage} /> : null}
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							type="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						{/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
						<Button 
							type="submit" 
							fullWidth 
							variant="contained" 
							color="primary" 
							className={classes.submit}>
								Anmelden
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="./password-reset" variant="body2">
									Passwort vergessen?
								</Link>
							</Grid>
							<Grid item>
								{'Neu bei Habesch? '}
								<Link href="/signup" variant="body2">
									{' Jetzt Registrieren.'}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

export default withStyles(styles)(SignIn);
