import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Grow from '@material-ui/core/Grow';
import LandingAppBar from '../components/LandingAppBar';
import LandingFooter from '../components/LandingFooter';
import Pricing from '../components/Pricing';
import Heading from '../components/Heading';
import Features from '../components/Features';
import { TransitionProps } from '@material-ui/core/transitions/transition';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Landing() {

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [transition] = useState(Grow as TransitionProps);
  const [vertical] = useState("top");
  const [horizontal] = useState("center");

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();
  if (!msg && history.location.state && (history.location.state as any).msg) {
    setMsg((history.location.state as any).msg);
    setOpen(true);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <LandingAppBar />
      <Heading />
      <Features />
      <Pricing />
      <LandingFooter />
      <Snackbar
        anchorOrigin={{ vertical, horizontal } as SnackbarOrigin}
        onClose={handleClose}
        open={open}
        TransitionComponent={transition as any}
        // key={transition.name}
      >
        <Alert severity="success">{msg}</Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export default Landing;