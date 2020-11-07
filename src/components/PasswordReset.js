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

import firebase from '../services/Firebase';
import FormError from './FormError';
//import { navigate } from '@reach/router';

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
	},
});

class PasswordReset extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
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

	handleSubmit(e) {
		var registrationInfo = {
			email: this.state.email,
		};
		e.preventDefault();

		firebase.auth().languageCode = 'de';

		firebase
			.auth()
			.sendPasswordResetEmail(registrationInfo.email)
			.then(() => {
				//	navigate(//'./appointments');
				this.props.history.push('/signin');
			})
			.catch((error) => {
				console.log('Firebase Error:', error.code, error);

				if (error.message !== null) {
					let errorMessage = messages[error.code] || error.message;
					this.setState({ errorMessage });
				} else {
					this.setState({ errorMessage: null });
				}
			});
	}
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
						Password reset
					</Typography>
					<form className={classes.form} noValidate onSubmit={this.handleSubmit}>
						{this.state.errorMessage !== null ? <FormError theMessage={this.state.errorMessage} /> : null}
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Adresse"
							name="email"
							autoComplete="email"
							autoFocus
							value={this.state.email}
							onChange={this.handleChange}
						/>
						{/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Email senden
						</Button>
						<Grid container>
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

export default withStyles(styles)(PasswordReset);
