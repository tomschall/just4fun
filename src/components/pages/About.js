import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import me from '../../img/me.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: 'black',
	},
	bgText: {
		color: 'black',
	}
}));

function About() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<h1>About me</h1>
				</Grid>
				<Grid item xs={12} sm={6}>
					<p>
						Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
						live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
						a large language ocean. A small river named Duden flows by their place and supplies it with the
						necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly
						into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an
						almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
						decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because
						there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little
						Blind Text didn’t listen.
					</p>
				</Grid>
				<Grid item xs={12} sm={6}>
					<div>
						<img src={me} alt="Nigsty" style={imgStyle} />
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
const imgStyle = {
	width: '100%',
	height: 'auto',
};

export default About;
