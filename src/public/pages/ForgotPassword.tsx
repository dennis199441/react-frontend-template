import React, { useState, FormEvent } from 'react';
import { useHistory } from "react-router-dom";
import { Auth } from 'aws-amplify';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarOrigin } from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import Copyright from '../components/Copyright';
import Logo from '../../common/component/Logo';

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
    margin: theme.spacing(8, 4),
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

function ForgotPassword() {
  const classes = useStyles();

  const [disable, setDisable] = useState(false);
  const [openErrMsg, setOpenErrMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [transition] = useState(Grow as TransitionProps);
  const [vertical] = useState("top");
  const [horizontal] = useState("center");

  let history = useHistory();

  const handleCloseErrMsg = () => {
    setOpenErrMsg(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisable(true);
    const data = new FormData(event.target as HTMLFormElement);
    let email: string = data.get('email') as string;
    Auth.forgotPassword(email).then(data => {
      history.replace('/forgot/confirm', { username: email });
    }).catch(e => {
      setOpenErrMsg(true);
      setDisable(false);
      setErrorMsg(e.message);
    })
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Logo route="/"/>
          <Typography component="h1" variant="h5">
            Forgot password
          </Typography>
          <p style={{ textAlign: 'center' }}>
            Please check your email for the verification code.
          </p>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email address"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={disable}
            >
              Verify
            </Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal } as SnackbarOrigin}
              open={openErrMsg}
              onClose={handleCloseErrMsg}
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

export default ForgotPassword;
