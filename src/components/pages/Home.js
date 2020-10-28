import React from 'react';
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		textAlign: 'center',
		border: 'solid',
		color: '#009444',
		padding: '20px',
		fontWeight: 'bold',
		margin: 'auto',
		maxWidth: 400,
		'&hover': {
			color: 'red'
		},
		[theme.breakpoints.down('xs')]: {
			maxWidth: 250,
		},
	},
	mainContainer: {
		marginTop: '10em',
		[theme.breakpoints.down('md')]: {
			marginTop: '10em',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '10em',
		},
	},
	homeLink: {
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'none',
		}
	},
	'@global': {
		a: {			
			'&:hover': {textDecoration: 'none',}
		}
	}
}));

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid  container direction="column" justify="center" alignItems="center" className={classes.mainContainer}>
				<Grid  item >
				<Link underline='none' href="./appointments" variant="body2">
					<Paper className={classes.paper}>
						<Typography variant="h2" >
							Termin vereinbaren?
						</Typography>
					</Paper>
					</Link>
				</Grid>
			</Grid>
		</div>
	);
}
export default Home;
