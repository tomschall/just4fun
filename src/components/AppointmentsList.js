import React, { Component } from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class AppointmentsList extends Component {
	render() {
		const { appointments } = this.props;
		const myAppointments = appointments.map((item) => {
			return (
        <TableRow key={item.appointmentID}>					
          <TableCell align="left">{item.thema}</TableCell>
          <TableCell align="left">{item.institution}</TableCell>
          <TableCell align="left">{item.aptDateTime}</TableCell>
        </TableRow>
			);
    });
    return myAppointments;
    
	}
}

export default AppointmentsList;
