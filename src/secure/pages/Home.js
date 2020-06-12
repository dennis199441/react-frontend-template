import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../../logo.svg';
import '../../App.css';

function Home(props) {
  return (
    <div className="App" style={{display: 'block'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {props.msg}
        <Grid container justify='center' spacing={2}>
        </Grid>
      </header>
    </div>
  );
}

export default Home;