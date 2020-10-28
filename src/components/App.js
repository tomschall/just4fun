import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from './Firebase';

import Home from './pages/Home';
import About from './pages/About';
import TelephoneInterpreting from './pages/TelephoneInterpreting';
import Faq from './pages/Faq';
import Reviews from './pages/Reviews';
import Appointments from './Appointments';
import SignIn from './SignIn';
import SignUp from './SignUp';

import Header from './ui/Header';
import Footer from './ui/Footer';
import MobileFooter from './ui/MobileFooter';

import '../css/App.css';
import { ThemeProvider } from '@material-ui/core';

import theme from '../components/ui/Theme';
import { navigate } from '@reach/router';

const db = firebase.firestore();

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
			displayName: null,
			userID: null,
			appointments: []
		};
		this.addAppointment = this.addAppointment.bind(this);
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((FBUser) => {
			if (FBUser) {
				this.setState({
					user: FBUser,
					displayName: FBUser.displayName,
					userID: FBUser.uid,
				});
			
				db.collection("appointments").get().then((querySnapshot) => {
					let appointments = [];
					querySnapshot.forEach((doc) => {
							console.log(`${doc.id} =>`, doc.data());
							appointments.push(doc.data())
					});
					this.setState({appointments});
				});

				db.collection("reviews").get().then((querySnapshot) => {
					let reviews = [];
					querySnapshot.forEach((doc) => {
							console.log(`${doc.id} =>`, doc.data());
							reviews.push(doc.data())
					});
					this.setState({reviews});
				});
				
			} else {
				this.setState({ user: null });
			}
		});
	}
	registerUser = (userName) => {
		firebase.auth().onAuthStateChanged((FBUser) => {
			FBUser.updateProfile({
				displayName: userName,
			}).then(() => {
				this.setState({
					user: FBUser,
					displayName: FBUser.displayName,
					userID: FBUser.uid,
				});
				navigate('/welcome');
			});
		});
	};

	logOutUser = (e) => {
		e.preventDefault();

		firebase
			.auth()
			.signOut()
			.then(() => {
				this.setState({
					displayName: null,
					userID: null,
					user: null,
				});
				navigate('/');
			});
	};

	addAppointment = (tempApt) => {
			db.collection('appointments')
			.add( tempApt )
			.then(function (docRef) {
				console.log('Document written with ID: ', docRef.id);
			})
			.catch(function (error) {
				console.error('Error adding document: ', error);
			});
	};
	addReveiw = (tempApt) => {
		db.collection('appointments')
		.add( tempApt )
		.then(function (docRef) {
			console.log('Document written with ID: ', docRef.id);
		})
		.catch(function (error) {
			console.error('Error adding document: ', error);
		});
};

	render() {
		return (
			<Router>
				<div className="layout-container">
					<ThemeProvider theme={theme}>
						<Header user={this.state.user} logOutUser={this.logOutUser} />
						<div className="layout-content">
							<Switch>
								<Route exact path="/" component={Home} user={this.state.user} />
								<Route path="/about" component={About} />
								<Route path="/interpreting" component={TelephoneInterpreting} />
								<Route path="/faq" component={Faq} />
								<Route path="/reviews" component={Reviews} />
								<Route path="/appointments">
									<Appointments
										appointments={this.state.appointments}
										addAppointment={this.addAppointment}
									/>
								</Route>

								<Route path="/signin" component={SignIn} />
								<Route path="/signup" component={SignUp} registerUser={this.registerUser} />
							</Switch>
						</div>
						<Footer />
						<MobileFooter />
					</ThemeProvider>
				</div>
			</Router>
		);
	}
}

export default App;
