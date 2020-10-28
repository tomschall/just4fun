import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import FormError from './FormError';
import AppointmentsList from './AppointmentsList';

const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	table: {
    minWidth: 650,
  },
});

class Appointments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thema: '',
			institution: '',
			aptDateTime: '',
			errorMessage: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const itemName = e.target.name;
		const itemValue = e.target.value;

		this.setState({
			[itemName]: itemValue,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let tempApt = {
			thema: this.state.thema,
			institution: this.state.institution,
			//aptDateTime: new Date(this.state.aptDateTime),
			aptDateTime: this.state.aptDateTime,
		};
		this.props.addAppointment(tempApt);
		this.setState({ thema: '', institution: '' });
	}
	render() {
		const {
			classes,
		} = this.props; 
		return (
			<>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
						Termin vereinbaren
					</Typography>
					<form className={classes.form} noValidate onSubmit={this.handleSubmit}>
						{this.state.errorMessage !== null ? <FormError theMessage={this.state.errorMessage} /> : null}
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="thema"
							label="Das Thema"
							name="thema"
							autoComplete="thema"
							autoFocus
							value={this.state.thema}
							onChange={this.handleChange}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="institution"
							label="Name & Institution"
							name="institution"
							autoComplete="institution"
							value={this.state.institution}
							onChange={this.handleChange}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="aptDateTime"
							id="datetime-local"
							label="Next appointment"
							type="datetime-local"
							InputLabelProps={{
								shrink: true,
							}}
							value={this.state.aptDateTime}
							onChange={this.handleChange}
						/>
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Einen Termin vereinbaren
						</Button>
					</form>
				</div>				
			</Container>
			<Grid container spacing={2}>
				<Grid item md={2} sm={0}></Grid>							
				<Grid item xs={12} md={8}>
					<TableContainer component={Paper}>
						<Table className={classes.table} size="small" aria-label="a dense table">						
							{this.props.appointments && this.props.appointments.length ? (																			
								<TableHead>
									<TableRow>
										<TableCell align="left">Das Thema</TableCell>
										<TableCell align="left">Institution</TableCell>
										<TableCell align="left">Datum & Zeit</TableCell>
									</TableRow>
								</TableHead>							
							) : null}
							<TableBody>
								{this.props.appointments && <AppointmentsList appointments={this.props.appointments} />}
							</TableBody>								
						</Table>
					</TableContainer>
					</Grid>
					<Grid item md={2} sm={0}></Grid>
				</Grid>
				</>
		);
	}
}

export default withStyles(styles)(Appointments);
