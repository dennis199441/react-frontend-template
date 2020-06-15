import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SignInButton from '../components/SignInButton';
import SignUpButton from '../components/SignUpButton';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Logo from '../../common/component/Logo';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

function LandingAppBar() {
  const classes = useStyles();
  
  return (
    <AppBar position="sticky" color="default" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Logo/>
          </Typography>
          <SignInButton/>
          <SignUpButton/>
        </Toolbar>
      </AppBar>
  );
};

export default LandingAppBar;