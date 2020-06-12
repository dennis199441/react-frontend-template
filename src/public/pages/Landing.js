import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LandingAppBar from '../components/LandingAppBar';
import LandingFooter from '../components/LandingFooter';
import Pricing from '../components/Pricing';
import Heading from '../components/Heading';
import Features from '../components/Features';

function Landing() {
  return (
    <React.Fragment>
      <CssBaseline />
      <LandingAppBar/>
      <Heading/>
      <Features/>
      <Pricing/>
      <LandingFooter/>
    </React.Fragment>
  );
}

export default Landing;