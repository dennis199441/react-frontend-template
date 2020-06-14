import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Auth } from 'aws-amplify';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';
import Copyright from '../components/Copyright';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function ConfirmSignup() {
  const classes = useStyles();

  const [openSucMsg, setOpenSucMsg] = useState(false);
  const [openErrMsg, setOpenErrMsg] = useState(false);
  const [openInfoMsg, setOpenInfoMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [infoMsg, setInfoMsg] = useState();
  const [transition] = useState(Grow);
  const [vertical] = useState("top");
  const [horizontal] = useState("center");

  let history = useHistory();
  if (!history.location.state) {
    return <Redirect to="/signup" />
  }

  let username = history.location.state.username;

  const handleCloseSucMsg = (event, reason) => {
    setOpenSucMsg(false);
    history.replace('/signin');
  };

  const handleCloseInfoMsg = (event, reason) => {
    setOpenInfoMsg(false);
  };

  const handleCloseErrMsg = (event, reason) => {
    setOpenErrMsg(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let verificationCode = data.get('verificationCode');
    Auth.confirmSignUp(username, verificationCode).then(data => {
      setOpenSucMsg(true);
      setSuccessMsg("Verification Success! Click to sign in!");
    }).catch(e => {
      setOpenErrMsg(true);
      setErrorMsg(e.message);
    })
  };

  const sendVerificationCode = () => {
    Auth.resendSignUp(username, { email: username }).then(data => {
      setOpenInfoMsg(true);
      setInfoMsg("New verification code is sent to your email address.");
    }).catch(e => {
      setOpenErrMsg(true);
      setErrorMsg(e.message);
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify Email Address
          </Typography>
          <p style={{ textAlign: 'center' }}>
            Please check your email for the verification code.
          </p>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  name="verificationCode"
                  variant="outlined"
                  required
                  fullWidth
                  id="verificationCode"
                  label="Verification Code"
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
            >
              Verify
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Button size="small" color="primary" onClick={sendVerificationCode}>
                  Haven't received your verification code?
                </Button>
              </Grid>
            </Grid>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={openInfoMsg}
              onClose={handleCloseInfoMsg}
              TransitionComponent={transition}
              key={transition.name}
            >
              <Alert severity="info">{infoMsg}</Alert>
            </Snackbar>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={openErrMsg}
              onClose={handleCloseErrMsg}
              TransitionComponent={transition}
              key={transition.name}
            >
              <Alert severity="error">{errorMsg}</Alert>
            </Snackbar>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={openSucMsg}
              onClose={handleCloseSucMsg}
              TransitionComponent={transition}
              key={transition.name}
            >
              <Alert severity="success">{successMsg}</Alert>
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

export default ConfirmSignup;
