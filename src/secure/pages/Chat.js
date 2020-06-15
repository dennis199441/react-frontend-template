import React, { useState, useLayoutEffect } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';

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
    margin: theme.spacing(2, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function Chat() {
  const classes = useStyles();
  const [width, height] = useWindowSize();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Send");
  };

  const handleShowProfile = () => {
    console.log("Show profile");
  }
  console.log(height);
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={4} className={classes.image} />
      <Grid item xs={12} sm={10} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={handleShowProfile}
            >
              <AccountCircle />
            </IconButton>
            Name
          </Typography>
          <Paper elevation={0} style={{ height: height * 0.7 , width: width, overflow: 'auto', marginBottom: '15px' }}>
            <List>
              <ListItem><h2>TEST 1</h2></ListItem>
              <ListItem><h2>TEST 2</h2></ListItem>
              <ListItem><h2>TEST 3</h2></ListItem>
              <ListItem><h2>TEST 4</h2></ListItem>
              <ListItem><h2>TEST 5</h2></ListItem>
              <ListItem><h2>TEST 6</h2></ListItem>
              <ListItem><h2>TEST 7</h2></ListItem>
              <ListItem><h2>TEST 8</h2></ListItem>
              <ListItem><h2>TEST 9</h2></ListItem>
              <ListItem><h2>TEST 10</h2></ListItem>
              <ListItem><h2>TEST 11</h2></ListItem>
              <ListItem><h2>TEST 12</h2></ListItem>
            </List>
          </Paper>
          <div id="test" style={{ width: '100%' }}>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="message"
                    name="message"
                    multiline={true}

                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Send
                </Button>
                </Grid>
                <Grid item xs={2}>

                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Chat;
