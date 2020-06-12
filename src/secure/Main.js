import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routing from './Routing';
import SecureAppBar from './components/SecureAppBar';
import { withAuthenticator } from '@aws-amplify/ui-react';

function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SecureAppBar/>
      <Routing />
    </React.Fragment>
  );
}

export default withAuthenticator(Main);