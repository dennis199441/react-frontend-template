import React, { memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import FullScreenLoading from '../common/component/FullScreenLoading';

function Routing(props) {
  if(!props.user) {
    return <FullScreenLoading/>
  }

  let msg = "signed in as " + props.user;
  return (
    <Switch>
      <Route path="/secure/home">
        <Home msg={msg}/>
      </Route>
      <Route path="/secure/hello">
        <h1>Hello</h1>
      </Route>
      <Route path="/secure">
        <Redirect to="/secure/home" />
      </Route>
    </Switch>
  );
}
  
export default memo(Routing);
  