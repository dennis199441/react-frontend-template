import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Button } from '@material-ui/core';
import LogoProps from '../types/LogoProps';

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: 1,
    maxWidth: 160,
  }
}));

function Logo(props: LogoProps) {
  const classes = useStyles();
  let route = props.route;
  let history = useHistory();
  
  const handleClickLogo = () => {
    history.replace(route);
  }
  
  return (
    <Button onClick={handleClickLogo}>
      <img src={logo} alt="logo" className={classes.logo}/>
    </Button>
  );
};

export default Logo;