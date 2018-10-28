import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
							<h1>HIRE ME TO BUILD YOUR WEBSITE.<br/>OR DON'T.<br />I'M NOT GOING TO BEG.</h1>
						</Grid>
					</Grid>
					<Divider />
					<Grid container className={classes.root} style={{ maxWidth: 1500 }} justify="center" alignItems="center">
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
								Let's cut right to the chase. We're all people who are trying to make it in this world. Maybe you're someone who is trying to 
								start their own business and need a simple website to schedule appointments or just to display some information to help 
								promote your business. Or maybe your needs or slightly more complex than that. Whatever your needs may be, let's talk about it
								and see if we can come up with a solution together.
							</p>
							<p>
								Maybe you don't have the know how to do this yourself, or you don't have the resources to pay a company to do it for you.
								Paying an established company can be very expensive because of overhead costs. Consulting can be expensive. 
								That's where VERY GOOD WEBSITE COMPANY comes in. I built this website up in less than a day. Do you like it?
								This website is built in React.js, a framework that I'm currently teaching myself how to use. I have a good ability to 
								figure out how certain technologies work and how I can use those technologies to accomplish goals.
							</p>
							<p>
								My intent is to consult you, help you meet your needs within a reasonable and affordable budget, and to make a little extra money
								aside from my full time job. I will always be honest with you, I will not cheat you out of your money, and if I can't provide what you're
								looking for, I will let you know up front.
							</p>
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