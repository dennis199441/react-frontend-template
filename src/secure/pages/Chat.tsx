import React, { useState, useLayoutEffect, FormEvent } from 'react';
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
import Message from '../components/Messaege';
import Contact from '../components/Contact';

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

var messages = [
  {id: 1, content: "Test 1", sender: "John"},
  {id: 2, content: "Test 2", sender: "John"},
  {id: 3, content: "Test 3", sender: "John"},
  {id: 4, content: "Test 4", sender: "John"},
  {id: 5, content: "Test 5", sender: "John"},
  {id: 6, content: "Test 6", sender: "Me"},
];

var contacts = [
  {id: 1, name: "John"},
  {id: 2, name: "Tom"},
  {id: 3, name: "Ken"},
];

function Chat() {
  const classes = useStyles();
  const size = useWindowSize();

  const renderMessages = () => {
    return messages.map(msg => <Message key={msg.id} sender={msg.sender} content={msg.content}/>);
  };

  const renderContacts = () => {
    return contacts.map(contact => <Contact key={contact.id} name={contact.name}/>);
  }
  
  function ContactList() {
    return (
      <Grid item xs={false} sm={2} md={4} component={Paper} square>
        <div className={classes.paper}>
          <Paper elevation={0} style={{ height: size[1] * 0.7, overflow: 'auto', marginBottom: '15px' }}>
            <List>
              {renderContacts()}
            </List>
          </Paper>
        </div>
      </Grid>
    );
  };
  
  function ChatMessages() {
    return (
      <Grid item xs={12} sm={10} md={8} component={Paper} elevation={3} square>
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
            John
          </Typography>
          <Paper elevation={0} style={{ height: size[1] * 0.7, overflow: 'auto', marginBottom: '15px' }}>
            <List>
              {renderMessages()}
            </List>
          </Paper>
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
      </Grid>
    );
  }


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Send");
  };

  const handleShowProfile = () => {
    console.log("Show profile");
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <ContactList/>
      <ChatMessages/>
    </Grid>
  );
}

export default Chat;
