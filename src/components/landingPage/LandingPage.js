import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../footer/Footer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Button from '@material-ui/core/Button';
import SignInDrawer from '../signin/SignInDrawer';
import TopBar from './TopBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {
    backgroundImage: "url('/homebg.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 8, 4, 8),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signin: {
    margin: theme.spacing(3, 3, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const containerElement = <NavLink to="/home" />;

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <div className={classes.signin}>
            <SignInDrawer />
          </div>

          <div className={classes.paper}>
            <Typography component="h1" variant="h4">
              Looking for some healthy food?
            </Typography>
            <br />
            <Typography component="h6" variant="h6">
              Looking for some healthy food?
            </Typography>
            {/* <form className={classes.form} noValidate>
              <SelectCity />
            </form> */}
            <br />
            <br />
            <br />
            <br />
            
            <NavLink to="/menu" ><Button variant="contained" color="primary">See menu</Button></NavLink>
            
            <br />
            <br />
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={5} className={classes.image} />
      </Grid>
      <Footer />
    </>
  );
}
