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

export default function MobileFooter(props) {
	const classes = useStyles();

	const { user, logOutUser } = props;
	return (
		<footer className={classes.mobileFooter}>
		<Grid  container direction="column" justify="center" alignItems="center" >
			<Grid item >
				{user ? (
				<Button 
					variant="contained" 
					color="secondary" 
					onClick={logOutUser}
					>
					<AccountCircleIcon />
					Logout 
				</Button>
			) : (
				<Button
					component={Link}
					to={'/signin'}
					variant="contained"
					color="secondary"
					className={classes.button}
				>
					<AccountCircleIcon />
					Login
				</Button>
			)}			
			</Grid>
		{/* 	<Grid item>
				<Typography variant="body2">
					Login
				</Typography>
			</Grid> */}
		</Grid>
	
		</footer>
	);
}
