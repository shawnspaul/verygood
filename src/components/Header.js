import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import logo from './color_logo_transparent.png';
import emblum from './emblum.png';
import text from './text.png';
import v from './v.png';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	flex: {
		flex: 1,
		textAlign:'left',
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	contactButton: {
	    // backgroundColor: '#e4ddb1',
	    // color: '#11214f',
	    float: 'right'
	},
	toolBar: {
		backgroundColor: '#11214f', 
		color:'#d4b878'
	}
});


class Header extends React.Component {

	constructor (props) {
		super();
		this.state = {
			title: ""
		}
	};


	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		});
	};

	render () {

		if (this.props.title !== undefined) {
			this.title = this.props.title;
		}
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static">
		            <Toolbar className={classes.toolBar}>
						<IconButton onClick={this.toggleDrawer('left', true)} className={styles.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon/>
						</IconButton>
						<img style={{height:'25px'}} src={text} />
						<Typography variant="title" color="inherit" className={styles.flex}>
							{this.state.title}
						</Typography>
						<div style={{ width: '100%'}}>
							<Button color="inherit" className={classes.contactButton} component={Link} to="/contact">Contact</Button>
						</div>
		            </Toolbar>
		        </AppBar>
		        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
			        <div tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>
						<img style={{margin:'25px',height:'125px'}} src={emblum} />
						<List component="nav" >
							<div>
								<Link to="/">
			            			<ListItem button>
										<ListItemText primary="Home"/>
									</ListItem>
								</Link>
								<Link to="/about">
									<ListItem button>
										<ListItemText primary="About" />
									</ListItem>
								</Link>
								<Link to="/contact">
									<ListItem button>
										<ListItemText primary="Contact" />
									</ListItem>
								</Link>
								<Divider />
							</div>
					    </List>
			        </div>
		        </Drawer>
		        <div className="container-fluid">
		        	{this.props.children}
		        </div>
		    </div>

		);

	}

}
export default withStyles(styles)(Header);
