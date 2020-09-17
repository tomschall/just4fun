import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
		color: theme.palette.text.secondary,
		fontSize: '40px',
		border: 'solid',
		color: '#009444',
		padding: '20px',	
		fontWeight: 'bold',		
    margin: 'auto',
  },
}));

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
				<Grid item xs direction="column">
          <Paper className={classes.paper}>Termin vereibaren?</Paper>
        </Grid>
					<div style={homeStyle}>
						<p style={title}>Termin vereibaren?</p>
					</div>
				</Grid>
			</div>
	);
}
const homeStyle = {
		display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
		justifyContent: 'center',
		padding: '50px',
    width: '100%',
}
const title = {
	fontSize: '40px',
	border: 'solid',
	color: '#009444',
	padding: '20px',	
	fontWeight: 'bold'
}
export default Home;
