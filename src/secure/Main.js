import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import AuthService from '../api/AuthService';
import Routing from './Routing';

function Main() {
  const [user, setUser] = useState();
  
  let isLoggedIn = AuthService.isLoggedIn();
  if (!isLoggedIn) {
    return <Redirect to='/'/>
  }
  
  AuthService.getUser().then((res) => {
    setUser(res.data.name);
  });

  return <Routing user={user}/>
}

export default Main;