import React, { useState, FormEvent } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarOrigin } from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';
import { CircularProgress } from '@material-ui/core';
import { Auth } from 'aws-amplify';
import Copyright from '../components/Copyright';
import Logo from '../../common/component/Logo';
import { TransitionProps } from '@material-ui/core/transitions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4,),
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
}));

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Signin() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [transition] = useState(Grow as TransitionProps);
  const [vertical] = useState("top");
  const [horizontal] = useState("center");
  const [loading, setLoading] = useState(true);

  let history = useHistory();

  Auth.currentUserInfo().then(user => {
    if (user) {
      history.replace('/secure');
    } else {
      setLoading(false);
    }
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisable(true);
    const data = new FormData(event.target as HTMLFormElement);
    let email: string = data!.get('email') as string;
    let password: string = data!.get('password') as string;
    Auth.signIn(email.toLowerCase(), password).then(data => {
      history.replace('/secure')
    }).catch(e => {
      setOpen(true);
      setDisable(false);
      setErrorMsg(e.message);
    });
  };

  const renderButton = () => {
    if (loading) {
      return (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress />
        </div>
      );
    }
    return (
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={disable}
      >
        Sign In
      </Button>
    );
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <div className={classes.paper}>
          <Logo route="/"/>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {renderButton()}
            <Grid container>
              <Grid item xs>
                <Link href="/forgot" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Snackbar
              anchorOrigin={{ vertical, horizontal } as SnackbarOrigin}
              open={open}
              onClose={handleClose}
              TransitionComponent={transition as any}
            >
              <Alert severity="error">{errorMsg}</Alert>
            </Snackbar>
          </form>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

export default Signin;
