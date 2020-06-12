import React from 'react';
import { Redirect } from "react-router-dom";
import Routing from './Routing';
import AuthService from '../api/AuthService';

function Main() {
  let isLoggedIn = AuthService.isLoggedIn();
  if(isLoggedIn) {
    return <Redirect to='/secure/home'/>
  }
  
  return <Routing/>
}

export default Main;