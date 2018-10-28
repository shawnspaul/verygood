import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
// import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import money from './money.jpg';
import honest from './honest.jpg';
import bulb from './bulb.jpg';

const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: theme.spacing.unit * 5,
	},
	paper: {
		...theme.mixins.gutters(),
	    paddingTop: theme.spacing.unit * 2,
	    paddingBottom: theme.spacing.unit * 2,
	    backgroundColor: '#f5f5f5',
	},
	control: {
		padding: theme.spacing.unit * 2,
	},
	card: {
		margin: 5,
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
			<div>
				<Grid container className={classes.root} justify="center" alignItems="center">
					<Grid item xl={6} lg={8} md={10} sm={11} xs={11}>
						<Paper elevation={10} className={classes.paper}>
							<h1>HIRE ME TO BUILD YOUR WEBSITE.<br/>OR DON'T.<br />I'M NOT A BEGGAR.</h1>
						</Paper>
					</Grid>
				</Grid>
				<Grid container className={classes.root} justify="center" alignItems="center">
					<Grid item xl={3} lg={3} md={12} sm={12} xs={12}>
						<Card className={classes.card}>
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
						<Card className={classes.card}>
					        <CardMedia
					          component="img"
					          alt="Contemplative Reptile"
					          className={classes.media}
					          image={honest}
					          title="Contemplative Reptile"
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
					          alt="Contemplative Reptile"
					          className={classes.media}
					          image={bulb}
					          title="Contemplative Reptile"
					        />
					        <CardContent>
					          <Typography gutterBottom variant="h5" component="h2">
					            Savvy
					          </Typography>
					        </CardContent>
					    </Card>
					</Grid>
				</Grid>
			</div>
		);
	}
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);