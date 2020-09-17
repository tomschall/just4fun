import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.png';

function ElevationScroll(props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '3em',
		[theme.breakpoints.down('md')]: {
			marginBottom: '2em',
		},
		[theme.breakpoints.down('xs')]: {
			marginBottom: '1.25em',
		},
	},
	logo: {
		height: '7em',
		[theme.breakpoints.down('md')]: {
			height: '6em',
		},
		[theme.breakpoints.down('xs')]: {
			height: '5em',
		},
		padding: '5px',
		paddingLeft: '15px',
	},
	logoContainer: {
		padding: 0,
		'&hover': {
			backgroundColor: 'transparent',
		},
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: '25px',
	},
	button: {
		borderRadius: '50px',
		marginLeft: '50px',
		marginRight: '25px',
		fontFamily: 'Titillium Web',
		height: '45px',
		color: 'white',
	},
	drawerIcon: {
		height: '50px',
		width: '50px',
		color: 'white',
	},
	drawerIconContainer:{
		marginLeft: 'auto',
		"&:hover": {
			backgroundColor: 'transparent',
		}
	},
	drawer: {
		backgroundColor: theme.palette.common.blue
	},
	drawerItem: {
		...theme.typography.tab,
		// color: "yellow",
		opacity: 0.7
	},
	drawerItmeLogin: {
		// backgroundColor: theme.palette.common.red
	},
	drawerItemSelected: {
		"&. MuiListItemText-root": {
			opacity: 1
		}		
	},
	appbar:{
		zIndex: theme.zIndex.modal + 1, 
	}
}));

export default function Header2(props) {
	const classes = useStyles();
	const theme = useTheme();
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);	
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	
	const [openDrawer, setOpenDrawer] = useState(false);
	const [value, setValue] = useState(0);

	const handleChange = (e, value) => {
		setValue(value);
	};

	useEffect(() => {
		if (window.location.pathname === '/' && value !== 0) {
			setValue(0);
		} else if (window.location.pathname === '/about' && value !== 1) {
			setValue(1);
		} else if (window.location.pathname === '/interpreting' && value !== 2) {
			setValue(2);
		} else if (window.location.pathname === '/faq' && value !== 3) {
			setValue(3);
		} else if (window.location.pathname === '/reviews' && value !== 4) {
			setValue(4);
		}
	}, [value]);
	
	const routes = [
		{name: 'Home', link: "/", activeIndex: 0},
		{name: 'About', link: "/about", activeIndex: 1},
		{name: 'Telephonedolmetschen', link:"/interpreting", activeIndex: 2},
		{name: 'FAQ', link:"/faq", activeIndex: 3},
		{name: 'Kundenbewertungen', link: "/reviews", activeIndex: 4},
	];

	const tabs = (
		<React.Fragment>
			<Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary"
			>
				{routes.map((route, index) => (
					<Tab 
						key={`${route}${index}`}
						className={classes.tab} 
						component={Link} 
						to={route.link} 
						label={route.name} />
				))}
			</Tabs>
			<Button variant="contained" color="secondary" className={classes.button}>
				Login
			</Button>
		</React.Fragment>
	);
const drawer = (
	<React.Fragment>		
		<SwipeableDrawer 
			disableBackdropTransition={!iOS} 
			disableDiscovery={iOS} 
			open={openDrawer} 
			onClose={() => setOpenDrawer(false)} 
			onOpen={() => setOpenDrawer(true)}
			classes={{paper: classes.drawer}}
			>
			<div className={classes.toolbarMargin} />
			<List disablePadding>
				{routes.map(route => (
				<ListItem 
					divider 
					key={`${route}${route.activeIndex}`}
					button 
					component={Link} 
					to={route.link} 
					selected={value === route.activeIndex}
					classes={{selected: classes.drawerItemSelected}} 
					onClick={() => {
						setOpenDrawer(false); 
						setValue(route.activeIndex)}}>
					<ListItemText 
						className={classes.drawerItem} 
						disableTypography
					>
					{route.name}
					</ListItemText>
				</ListItem>
				))}				
				<ListItem 
					onClick={() => {
						setOpenDrawer(false); 
						setValue(5)}} 
						divider 
						button 
						component={Link} 
						classes={{root: classes.drawerItmeLogin, selected:
						classes.drawerItemSelected }} 
						to="/login" 
						selected={value === 5}
					>
					<ListItemText className={classes.drawerItem} 
					disableTypography>
					Login
					</ListItemText>
				</ListItem>
			</List>
		</SwipeableDrawer>
		<IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
			<MenuIcon className={classes.drawerIcon} />
		</IconButton>
	</React.Fragment>
)
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar position="fixed" className={classes.appbar}>
					<Toolbar disableGutters color="habeschaBraun">
						<Button
							component={Link}
							to="/"
							disableRipple
							onClick={() => setValue(0)}
							className={classes.logoContainer}
						>
							<img alt="company logo" className={classes.logo} src={logo} />
						</Button>
						{matches ? drawer : tabs}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
			test
		</React.Fragment>
	);
}
