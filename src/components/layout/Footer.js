import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		color: 'black',
	},
	bgText: {
		color: 'black',
  },
  txtAlign: {
    textAlign:'right'
  }
}));

function Footer() {
  const classes = useStyles();
	return (
		<footer className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <p>
            &copy; 2020
            <a href="https://www.habescha.ch"> Web & Interpret </a>. 
            Alle Rechte vorbehalten
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.txtAlign}>
            <a className="d-block" href="/#">Nutzungsbedingungen</a>
            <a className="d-block" href="/#">Datenschutz</a>
          </div>
        </Grid>
        {/*<!-- col-md-6 -->*/}
      </Grid>
    </footer>
	);
}
export default Footer;

