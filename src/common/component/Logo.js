import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    maxWidth: 160,
  }
}));

function Logo() {
  const classes = useStyles();

  let history = useHistory();
  
  const handleClickLogo = () => {
    console.log("test")
    history.replace("/");
  }
  
  return (
    <Button onClick={handleClickLogo}>
      <img src={logo} alt="logo" className={classes.logo}/>
    </Button>
  );
};

export default Logo;