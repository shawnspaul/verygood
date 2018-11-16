import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import money from './money.jpg';
import honest from './honest.jpg';
import bulb from './bulb.jpg';
import emblum from './emblum.png';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: theme.spacing.unit * 5,
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: 1500,
		padding: 10,
	},
	paper: {
		...theme.mixins.gutters(),
		maxWidth: 1500,
		margin: theme.spacing.unit * 1,
	    // paddingTop: theme.spacing.unit * 2,
	    // paddingBottom: theme.spacing.unit * 2,
	    backgroundColor: '#f5f5f5f5',
	},
	control: {
		padding: theme.spacing.unit * 2,
	},
	card: {
		margin: 5,
		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: '#11214f',
		color: 'rgb(230, 218, 146)',
		maxWidth: 345
	},
	contactButton: {
	    backgroundColor: '#e4ddb1',
	    color: '#11214f',
	    float: 'right',
	},
});


class Home extends React.Component {
	state = {
		spacing: '16',
	};

	handleChange = key => (event, value) => {
		this.setState({
			[key]: value,
		});
	};
    render () {
    	const { classes } = this.props;
    	const { spacing } = this.state;
		return (
			<Grid container className={classes.root} justify="center" alignItems="center">
				<Paper className={classes.paper}>
					<Grid container className={classes.root} justify="center" alignItems="center">
						<Grid item >
							<img style={{margin:'25px',height:'250px'}} src={emblum} />
						</Grid>
						<Grid item sm={6}>
							<h1>HIRE ME TO BUILD YOUR WEBSITE.<br/>I'M VERY GOOD.</h1>
						</Grid>
					</Grid>
					<Divider />
					<Grid container className={classes.root} justify="center" alignItems="center">
						<Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
							<Card className={classes.card} >
						        <CardMedia
						          component="img"
						          alt="Money"
						          className={classes.media}
						          image={money}
						          title="Money"
						        />
						        <CardContent>
						          <Typography gutterBottom variant="h5" component="h2">
						            Affordable
						          </Typography>
						        </CardContent>
						    </Card>
						</Grid>
						<Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
							<Card className={classes.card} >
						        <CardMedia
						          component="img"
						          alt="Handshake"
						          className={classes.media}
						          image={honest}
						          title="Handshake"
						        />
						        <CardContent>
						          <Typography gutterBottom variant="h5" component="h2">
						            Honest
						          </Typography>
						        </CardContent>
						    </Card>
						</Grid>
						<Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
							<Card className={classes.card}>
						        <CardMedia
						          component="img"
						          alt="Light Bulb"
						          className={classes.media}
						          image={bulb}
						          title="Light Bulb"
						        />
						        <CardContent>
						          <Typography gutterBottom variant="h5" component="h2">
						            Savvy
						          </Typography>
						        </CardContent>
						    </Card>
						</Grid>
					</Grid>
					<Grid container className={classes.root} justify="center" alignItems="center">
						<Grid item xl={6} lg={8} md={10} sm={11} xs={11}>
							<h2>What's this all about?</h2>
							<p>
								Let's cut right to the case. We're all just trying ot make it in this. You could be someone who is trying to start a business and you need a webiste.
								Maybe your needs include displaying some information about your company to inform people who are you and what you do, or you need an application where
								clients and schedule appointments. Or maybe your needs are a little more complex than that. Whatever your needs may be, let's talk about it and see
								if we can find the right solution for you!
							</p>
							<p>
								I will always be honest with you, I will not cheat you out of your money, and if I can't provide what you're
								looking for, I will let you know up front.
							</p>
							<Button color="inherit" className={classes.contactButton} size="large" component={Link} to="/contact">Contact</Button>
							<br />
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		);
	}
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);