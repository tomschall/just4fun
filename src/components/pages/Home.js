import React from 'react';
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		height: '60vh'
	},
	paper: {
		textAlign: 'center',
		border: 'solid',
		color: '#009444',
		padding: '20px',
		fontWeight: 'bold',
		margin: 'auto',
		maxWidth: 400,
		[theme.breakpoints.down('xs')]: {
			maxWidth: 250,
		},
	},
	mainContainer: {
		height: '100%',
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

function Home(props) {
	const classes = useStyles();
	const { user} = props;	
	console.log('test user' + user);
	return (
		<div className={classes.root}>
			<Grid  container direction="column" justify="center" alignItems="center" className={classes.mainContainer}>
				<Grid  item >
				{user ? (
					<Link underline='none' href="./appointments" variant="body2">				
						<Paper className={classes.paper}>
							<Typography variant="h2" >
								Termin vereinbaren?
							</Typography>
						</Paper>
						</Link>
					) : (
						<Link underline='none' href="./signin" variant="body2">				
							<Paper className={classes.paper}>
								<Typography variant="h2" >
									Termin vereinbaren?
								</Typography>
							</Paper>
						</Link>
						)}
				</Grid>
			</Grid>
		</div>
	);
}
export default Home;
