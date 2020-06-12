import React from 'react';
import Grid from '@material-ui/core/Grid';
import SignOutButton from '../components/SignOutButton';
import logo from '../../logo.svg';

function Home(props) {
  return (
    <div className="App" style={{display: 'block'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {props.user ? 'Signed in as ' + props.user + '!' : null}
        <SignOutButton/>
        <Grid container justify='center' spacing={2}>
        </Grid>
      </header>
    </div>
  );
}

export default Home;