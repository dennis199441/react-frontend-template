import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth } from 'aws-amplify';
import { useHistory} from 'react-router-dom';
import Routing from './Routing';
import SecureAppBar from './components/SecureAppBar';

function Main() {
  
  let history = useHistory();
  const [user, setUser] = useState();
  Auth.currentUserInfo().then(user => {
    if(!user) {
      history.replace('/');
    } else {
      console.log(user);
      setUser(user.attributes.email);
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <SecureAppBar/>
      <Routing user={user}/>
    </React.Fragment>
  );
}

export default Main;