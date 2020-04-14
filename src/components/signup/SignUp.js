import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { loaduser } from '../../redux/actions/userActions';
import { makeStyles } from '@material-ui/core/styles';
import { registerUser } from '../../api/authApi';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp({ loaduser, history, ...props }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const user = {};

    user.email = event.target.email.value || '';
    user.password = event.target.password.value || '';
    user.mobile = event.target.mobile.value || '';

    setLoading(true);

    registerUser(user)
      .then((response) => {
        loaduser({ ...response });
        console.log(response, 'registered');
        history.push('/dashboard');
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert('wrong username or password');
        console.log(err);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="mobile"
                label="mobile"
                type="mobile"
                id="mobile"
                autoComplete="mobile"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            className={classes.submit}
          >
            Sign Up
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink to="/signin">Already have an account? Sign in</NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

SignUp.propTypes = {
  loaduser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  loaduser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
