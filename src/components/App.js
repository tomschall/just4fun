import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import firebase, {
	logOutUser,
	getAppointments,
	deleteAppointment,
	getReviews,
	onAuthStateChanged,
	auth,
} from '../services/Firebase';

import Home from './pages/Home';
import About from './pages/About';
import TelephoneInterpreting from './pages/TelephoneInterpreting';
import Faq from './pages/Faq';
import Reviews from './pages/Reviews';
import Appointments from './Appointments';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordReset from './PasswordReset';

import Header from './ui/Header';
import Footer from './ui/Footer';
import MobileFooter from './ui/MobileFooter';

import '../css/App.css';
import { ThemeProvider } from '@material-ui/core';

import theme from '../components/ui/Theme';

const db = firebase.firestore();

class App extends Component {
	state = {
		user: null,
		displayName: null,
		userID: null,
		appointments: [],
		admin: false,
	};

	componentDidMount() {
		onAuthStateChanged(async (FBUser) => {
			if (FBUser) {
				this.setState({
					user: FBUser,
					displayName: FBUser.displayName,
					userID: FBUser.uid,
				});

				await this.readAppointments();

				const reviews = await getReviews();
				this.setState({ reviews });
			} else {
				this.setState({ user: null });
			}
		});
	}

	loadAll = () => {
		this.setState({ admin: true }, () => {
			this.readAppointments();
		});
	};
	readAppointments = async () => {
		if (!auth.currentUser) {
			return;
		}
		const appointments = await getAppointments({ all: this.state.admin });
		this.setState({ appointments });
	};

	handleLogOut = async (e) => {
		e.preventDefault();
		await logOutUser();
		this.setState({
			displayName: null,
			userID: null,
			user: null,
		});
		this.props.history.push('/');
	};

	handleDelete = async (appId) => {
		const confirmed = window.confirm('Are you sure you want to delete?');
		if (!confirmed) {
			return;
		}

		try {
			await deleteAppointment(appId);
			this.setState((state) => ({
				appointments: state.appointments.filter((app) => app.id !== appId),
			}));
		} catch (error) {
			console.error('Error removing document: ', error);
		}
	};

	editAppointment(e, item) {}

	addReveiw = (tempApt) => {
		db.collection('appointments')
			.add(tempApt)
			.then(function (docRef) {
				console.log('Document written with ID: ', docRef.id);
			})
			.catch(function (error) {
				console.error('Error adding document: ', error);
			});
	};

	render() {
		return (
			<div className="layout-container">
				<ThemeProvider theme={theme}>
					<Header user={this.state.user} handleLogOut={this.handleLogOut} />
					<div className="layout-content">
						<Switch>
							<Route exact path="/" component={() => <Home user={this.state.user} />} />
							<Route path="/about" component={About} />
							<Route path="/interpreting" component={TelephoneInterpreting} />
							<Route path="/faq" component={Faq} />
							<Route path="/reviews" component={Reviews} />
							<Route
								path="/appointments/:listAll?"
								children={({ match }) => {
									return (
										<Appointments
											appointments={this.state.appointments}
											readAppointments={this.readAppointments}
											userID={this.state.userID}
											handleDelete={this.handleDelete}
											editAppointment={this.editAppointment}
											match={match}
											loadAll={this.loadAll}
											admin={this.state.admin}
										/>
									);
								}}
							></Route>
							{/*<Route path="/appointments-list">
								<AppointmentsAll
									appointments={this.state.appointments}
									readAppointments={this.readAppointments}
									handleDelete={this.handleDelete}
									editAppointment={this.editAppointment}
								/>
							</Route>*/}
							<Route path="/signin" component={SignIn} />
							<Route path="/password-reset" component={PasswordReset} />
							<Route path="/signup">
								<SignUp user={this.state.user} />
							</Route>
						</Switch>
					</div>
					<Footer />
					<MobileFooter user={this.state.user} handleLogOut={this.handleLogOut} />
				</ThemeProvider>
			</div>
		);
	}
}

export default withRouter(App);
