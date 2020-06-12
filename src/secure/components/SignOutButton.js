
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  }
}));

function SignOut() {
  localStorage.removeItem('Authentication');
}

function SignOutButton() {
  const classes = useStyles();
  return (
    <Button href="/" color="primary" variant="outlined" className={classes.link} onClick={SignOut}>
      Sign out
    </Button>
  );
}

export default SignOutButton;