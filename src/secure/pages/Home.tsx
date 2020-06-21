import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HomeProps from '../types/HomeProps';
import logo from '../../logo.svg';
import '../../App.css';

function Home(props: HomeProps) {
  return (
    <div className="App" style={{display: 'block'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {props.msg}
        <Grid container justify='center' spacing={2}>
          <Button href="/secure/chat" color="primary" variant="contained" style={{marginTop: '50px'}}>Chat</Button>
        </Grid>
      </header>
    </div>
  );
}

export default Home;