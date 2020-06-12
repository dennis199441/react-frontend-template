import React from 'react';
import { Link as RouteLink, Redirect } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

function SignOut() {
    localStorage.removeItem('Authentication');
    return <Redirect to="/"/>
}

function SessionExpiredAlert() {
  return (
    <Alert
      severity="warning"
      action={
        <RouteLink to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit" size="small" onClick={SignOut}>
            Sign out
            </Button>
        </RouteLink>
      }
    >
      Session expired. Please sign in again.
    </Alert>
  );
}

export default SessionExpiredAlert;