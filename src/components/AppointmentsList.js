import React, { Component } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Moment from 'react-moment';
import firebase from './Firebase';


const db = firebase.firestore();

class AppointmentsList extends Component {

	render() {
		const { appointments } = this.props;
		const myAppointments = appointments.map((item) => {
			return (
        <TableRow key={item.id}>					
          <TableCell align="left">{item.thema}</TableCell>
          <TableCell align="left">{item.institution}</TableCell>
          <TableCell align="left">
          <Moment 
                date = {item.aptDateTime}
                format="DD.MM.YYYY hh:mm"
             />
          </TableCell>
          <TableCell align="left">
            <Button 
              title="Termin löschen"
              onClick={e=>this.props.deleteAppointment(e, item.id)}>
					<DeleteOutlineIcon />
				</Button>	</TableCell>
        </TableRow>
			);
    });
    return myAppointments;
    
	}
}

export default AppointmentsList;
