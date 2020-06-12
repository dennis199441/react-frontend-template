import React, { memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';

function Routing(props) {
  const user = props.user;
  return (
    <Switch>
      <Route path="/secure/home">
        <Home user={user}/>
      </Route>
      <Route path="/secure/hello">
        <h1>Hello</h1>
      </Route>
      <Route>
        <Redirect to="/secure/home"/>
      </Route>
    </Switch>
  );
}
  
export default memo(Routing);
  