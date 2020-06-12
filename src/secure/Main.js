import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth } from 'aws-amplify';
import { useHistory} from 'react-router-dom';
import Routing from './Routing';
import SecureAppBar from './components/SecureAppBar';

function Main() {
  
  let history = useHistory();

  Auth.currentUserInfo().then(user => {
    if(!user) {
      history.replace('/');
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <SecureAppBar/>
      <Routing />
    </React.Fragment>
  );
}

export default Main;