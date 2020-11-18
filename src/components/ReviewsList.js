import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Moment from 'react-moment';
import 'moment/locale/de';

const ReviewsList = (props) => {
	const { reviews } = props;

	return reviews.map((item) => {
		const date = new Date(item.reviewedDate.seconds * 1000);
		console.log(date);
		return (
			<TableRow key={item.id}>
				<TableCell align="left">{item.review}</TableCell>
				<TableCell align="left">{item.nameAndInstitution}</TableCell>
				<TableCell align="left">
					<Moment fromNow>
						{date}
					</Moment>
				</TableCell>
				<TableCell align="left"></TableCell>
			</TableRow>
		);
	});
};

export default ReviewsList;
