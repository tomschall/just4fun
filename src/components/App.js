import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TelephoneInterpreting from './pages/TelephoneInterpreting';
import Faq from './pages/Faq';
import Reviews from './pages/Reviews';
import Login from './pages/Login';
import AddAppointments from './AddAppointments';
import ListAppointments from './ListAppointments';
import SearchAppointments from './SearchAppointments';
import '../css/App.css';
import { without, findIndex } from 'lodash';

class App extends Component {
	constructor() {
		super();
		this.state = {
			myAppointments: [],
			formDisplay: false,
			lastIndex: 0,
			user: 'Nigsty',
		};

		this.deleteAppointment = this.deleteAppointment.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.addAppointment = this.addAppointment.bind(this);
		this.updateInfo = this.updateInfo.bind(this);
	}
	toggleForm() {
		this.setState({
			formDisplay: !this.state.formDisplay,
		});
	}
	addAppointment(apt) {
		let tempApts = this.state.myAppointments;
		apt.aptId = this.state.lastIndex;
		tempApts.unshift(apt);

		this.setState({
			myAppointments: tempApts,

			lastIndex: this.state.lastIndex + 1,
		});
	}
	updateInfo(name, value, id) {
		let tempApts = this.state.myAppointments;
		let aptIndex = findIndex(this.state.myAppointments, {
			aptId: id,
		});
		tempApts[aptIndex][name] = value;
		this.setState({
			myAppointments: tempApts,
		});
	}
	deleteAppointment(apt) {
		let tempApts = this.state.myAppointments;
		tempApts = without(tempApts, apt);
		this.setState({
			myAppointments: tempApts,
		});
	}
	componentDidMount() {
		fetch('./data.json')
			.then((response) => response.json())
			.then((result) => {
				const apts = result.map((item) => {
					item.aptId = this.state.lastIndex;
					this.setState({ lastIndex: this.state.lastIndex + 1 });
					return item;
				});
				this.setState({
					myAppointments: apts,
				});
			});
	}
	render() {
		return (
			<Router>
				<main className="page bg-white" id="petratings">
					<div className="container layout-container">
						<Header user={this.state.user} />
						<div className="layout-content">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route
									path="/add-list-appointment"
									render={(props) => (
										<React.Fragment>
											<div className="row">
												<div className="col-md-12 bg-white">
													<div className="container">
														<AddAppointments
															formDisplay={this.state.formDisplay}
															toggleForm={this.toggleForm}
															addAppointment={this.addAppointment}
														/>
														<ListAppointments
															appointments={this.state.myAppointments}
															deleteAppointment={this.deleteAppointment}
															updateInfo={this.updateInfo}
														/>
														<SearchAppointments />
													</div>{' '}
													{/* comment example */}
												</div>
											</div>
										</React.Fragment>
									)}
								/>{' '}
								{/* Route add-list-appointment */}
								<Route path="/about" component={About} />
								<Route path="/interpreting" component={TelephoneInterpreting} />
								<Route path="/faq" component={Faq} />
								<Route path="/reviews" component={Reviews} />
								<Route path="/login" render={() => <Login user={this.state.user} />} />
							</Switch>
						</div>
						<Footer />
					</div>
				</main>
			</Router>
		);
	}
}

export default App;
