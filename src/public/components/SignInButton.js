
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(0.5, 0.5),
  }
}));

function SignInButton() {
  const classes = useStyles();
  return (
    <Button href="/signin" color="primary" variant="outlined" className={classes.link}>
      Sign in
    </Button>
  );
}

export default SignInButton;