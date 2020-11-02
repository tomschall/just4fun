import React from 'react';
import { withStyles, makeStyles, useTheme, Grid, Typography, useMediaQuery } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

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
	},
}));

const Accordion = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {},
})(MuiAccordion);

const AccordionDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiAccordionDetails);

const AccordionSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(MuiAccordionSummary);

const faqContainer = [
	{ heading: 'Frage 1', body: 'Body text 1' },
	{ heading: 'Frage 2', body: 'Body text 2' },
	{ heading: 'Frage 3', body: 'Body text 3' },
];

const faqHeading = 'Häufig gestellte Fragen';

function Faq() {
	const classes = useStyles();
	const theme = useTheme();
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

	const [expanded, setExpanded] = React.useState(0);

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<Grid container className={classes.mainContainer}>
				<Grid item md={2} sm={0}></Grid>
				<Grid item xs={12} md={8}>
					<Grid container>
						<Grid item xs={12}>
							<Typography
								style={{ fontSize: matchesXS ? '2rem' : null }}
								variant="h1"
								color="primary"
								gutterBottom
							>
								{faqHeading}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Grid container>
								<Grid item item xs={12} md={12}>
									{faqContainer.map((faq, i) => {
										return (
											<div>
												<Accordion square expanded={expanded === i} onChange={handleChange(i)}>
													<AccordionSummary
														aria-controls="panel1d-content"
														id="panel1d-header"
													>
														<Typography>{faq.heading}</Typography>
													</AccordionSummary>
													<AccordionDetails>
														<Typography>{faq.body}</Typography>
													</AccordionDetails>
												</Accordion>
											</div>
										);
									})}
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
