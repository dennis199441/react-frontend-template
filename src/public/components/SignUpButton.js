
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  }
}));

function SignUpButton() {

  const classes = useStyles();

  return (
    <Button href="/signup" color="primary" variant="outlined" className={classes.link}>
      Sign up
    </Button>
  );
}

export default SignUpButton;