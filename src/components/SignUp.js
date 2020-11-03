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
import { Redirect } from 'react-router-dom';

import firebase from './Firebase';
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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
});

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
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

	handleSubmit(e) {
		var registrationInfo = {
			displayName: this.state.displayName,
			email: this.state.email,
			password: this.state.password,
		};
		e.preventDefault();

		firebase
			.auth()
			.createUserWithEmailAndPassword(
					registrationInfo.email, 
					registrationInfo.password)
			.then(() => {
				if (typeof this.props.registerUser === 'function') {
					this.props.registerUser(registrationInfo.firstName);
				}
				this.props.history.push('/');
			})
			.catch((error) => {
				if (error.message !== null) {
					console.log('Firebase ERROR', error.code, error.message);
					let errorMessage = messages[error.code] || error.message;
					this.setState({ errorMessage });
				} else {
					this.setState({ errorMessage: null });
				}
			});
	}

	render() {
		const { classes, user } = this.props;
		if (user) {
			return <Redirect to="/" />;
		}
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Registrieren
					</Typography>
					<form className={classes.form} noValidate onSubmit={this.handleSubmit}>
						{this.state.errorMessage !== null ? <FormError theMessage={this.state.errorMessage} /> : null}
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete="fname"
									name="displayName"
									variant="outlined"
									required
									fullWidth
									id="displayName"
									label="Full Name"
									autoFocus
									value={this.state.displayName}
									onChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="email"
									label="Email Adresse"
									name="email"
									autoComplete="email"
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
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
							</Grid>
							{/*  <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
						</Grid>
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Registrieren
						</Button>
						<Grid container justify="flex-end">
							<Grid item>
								{'Haben Sie berits ein Login? '}
								<Link href="./signin" variant="body2">
									Hier einloggen.
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}

export default withStyles(styles)(SignUp);
