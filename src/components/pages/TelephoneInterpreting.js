import React from 'react';
import { makeStyles, useTheme, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Helmet} from "react-helmet";


const useStyles = makeStyles((theme) => ({
	root: {
		padding: 20,
	},
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '1em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '1.25em',
		},
	},
	mainContainer: {
		marginTop: '2em',
		[theme.breakpoints.down('md')]: {
			marginTop: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '1em',
		},
	}
}));

const interpretHeading = 'Telefondolmetschen';
const interpretBodyText = 	
'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. ';

function TelephoneInterpreting() {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
	return (
		<div className={classes.root}>
			<Helmet>
				<title>Habescha: Interkulturelles Telefondolmetschen </title>
				<link rel="canonical" href="http://habescha.ch/home" />
				<meta
					name="description"
					content="Habescha: Das Telefondolmetschdienst für Tigrinya, Amharisch, Deutsch"
				/>
				<meta
					name="keywords"
					content="Habescha, Interkulturelles Dolmetschen, Telefondolmetschen, Tigrigna, Tigrinya, Amharisch, Deutsch"
				/>
		</Helmet>
		<Grid container className={classes.mainContainer} >
			<Grid item lg={2}></Grid>
			<Grid item xs={12} md={12} lg={8}>
				<Grid container>
					<Grid item xs={12}>
						<Typography 
								style={{fontSize: matchesXS ? '2rem' : null}}
								variant="h1" color="primary" gutterBottom>
							{interpretHeading}
							</Typography>
						</Grid>
					<Grid item xs={12}>
						<Grid container spacing={4}>
							<Grid item xs={12} md={6}>
							<Typography variant="body1" gutterBottom>
								{interpretBodyText}
							</Typography>
							</Grid>
							<Grid item xs={12} md={6}>
								<Typography variant="body1" gutterBottom>
									{interpretBodyText}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item lg={2}></Grid>
		</Grid>
		<div className={classes.toolbarMargin} />
	</div>
	);
}
export default TelephoneInterpreting;
