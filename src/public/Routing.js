import React, { memo } from "react";
import { Switch, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ConfirmSignup from './pages/ConfirmSignup';
import Landing from "./pages/Landing";

function Routing(props) {
  return (
    <Switch>
      <Route path="/signin">
        <Signin/>
      </Route>
      <Route path="/signup/confirm">
        <ConfirmSignup/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/">
        <Landing/>
      </Route>
    </Switch>
  );
  }
  
export default memo(Routing);
  