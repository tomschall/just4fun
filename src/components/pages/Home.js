import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		textAlign: 'center',
		fontSize: '40px',
		border: 'solid',
		color: '#009444',
		padding: '20px',
		fontWeight: 'bold',
		margin: 'auto',
		maxWidth: 400,
	},
}));

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs>
					<Paper className={classes.paper}>Termin vereibaren?</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
export default Home;
