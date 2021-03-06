import React, { Fragment, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const PublicComponent = lazy(() => import('./public/Main'));
const SecureComponent = lazy(() => import('./secure/Main'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Fragment />}>
        <Switch>
          <Route path="/secure">
            <SecureComponent/>
          </Route>
          <Route>
            <PublicComponent/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
