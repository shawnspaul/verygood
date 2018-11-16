import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  paper: {
    ...theme.mixins.gutters(),
    maxWidth: 1500,
    margin: theme.spacing.unit * 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: '#f5f5f5f5',
  },
  submitButton: {
    color: '#d4b370',
    backgroundColor : '#11214f',
  }
});


class OutlinedTextFields extends React.Component {
  state = {

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} justify="center" alignItems="center">
        <Paper className={classes.paper}>
          <Typography gutterBottom variant="h5" component="h2">
            Contact Form
          </Typography>
          <form container autoComplete="off">
            <TextField
              fullWidth
              autoFocus
              id="outlined-name"
              label="First Name"
              className={classes.textField}
              onChange={this.handleChange('first_name')}
              margin="normal"
              type="text"
              // variant="outlined"
            />
            <TextField
              id="outlined-name"
              fullWidth
              label="Last Name"
              className={classes.textField}
              onChange={this.handleChange('last_name')}
              type="text"
              margin="normal"
              // variant="outlined"
            />
            <TextField
              id="outlined-name"
              fullWidth
              label="Email"
              className={classes.textField}
              onChange={this.handleChange('email')}
              margin="normal"
              type="email"
              // variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Phone"
              fullWidth
              className={classes.textField}
              onChange={this.handleChange('phone')}
              margin="normal"
              type="phone"
              // variant="outlined"
            />
            <TextField
              id="outlined-error"
              fullWidth
              label="Notes"
              className={classes.textField}
              onChange={this.handleChange('notes')}
              margin="normal"
              multiline
              rows={10}
              variant="filled"
            />
            <br />
            <br />
            <Button className={classes.submitButton} variant="raised" size="large" fullWidth >Submit</Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);