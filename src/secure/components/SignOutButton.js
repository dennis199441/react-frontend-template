
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Auth } from 'aws-amplify';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  }
}));

function SignOutButton() {
  const classes = useStyles();
  
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <Button href="/" color="primary" variant="outlined" className={classes.link} onClick={signOut}>
      Sign out
    </Button>
  );
}

export default SignOutButton;