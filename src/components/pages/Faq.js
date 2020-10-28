import React from 'react';
import { makeStyles, useTheme, Grid, Typography} from '@material-ui/core';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const faqContainer = [{heading: 'Frage 1',  body: 'Body text 1'},{heading: 'Frage 2',  body: 'Body text 2'}]

const faqHeading = 'Häufig gestellte Fragen';

function Faq() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
						<Grid container className={classes.mainContainer} >
				<Grid item md={2} sm={0}></Grid>
				<Grid item item xs={12} md={8}>
					<Grid container>
						<Grid item xs={12}>
							<Typography variant="h1" color="primary" gutterBottom>
									{faqHeading}
							</Typography></Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item item xs={12} md={12}>
								{faqContainer.map(faq => {
									return (
								<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{faq.heading}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{faq.body}
          </Typography>
        </AccordionDetails>
      </Accordion>)} )}{/* 
								<Typography variant="body1" gutterBottom>
									{faqBodyText}
								</Typography> */}
								</Grid>								
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={2} sm={0}></Grid>
			</Grid>
			<div className={classes.toolbarMargin} />
		</div>
	);
}

export default Faq;
