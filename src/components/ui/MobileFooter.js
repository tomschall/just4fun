import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	mobileFooter: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	link: {
		color: 'white',
		fontWeight: 'bold',
		'&:hover': {
			color: theme.palette.common.red,
			backgroundColor: '#FFF',
			textDecoration: 'none',
		},
	},
	txtAlign: {
		textAlign: 'right',
		[theme.breakpoints.down('xs')]: {
			textAlign: 'left',
		},
	},
	mainContainer: {
		position: 'absolute',
	},
	buttonCenter: {
		justifyContent: 'center',
	}
}));

export default function MobileFooter() {
	const classes = useStyles();

	return (
		<footer className={classes.mobileFooter}>
		<Grid  container direction="column" justify="center" alignItems="center" >
			<Grid item >
				<Button component={Link} to={'/signin'} className={classes.buttonCenter} >
					<AccountCircleIcon />
				</Button>				
			</Grid>
			<Grid item>
				<Typography variant="body2">
					Login
				</Typography>
			</Grid>
		</Grid>
	
		</footer>
	);
}
