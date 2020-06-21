import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFFFFF",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));

function Features() {
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />    
      {/* Hero unit */}
      <Container maxWidth="xl" component="main" className={classes.container}>
        <Container maxWidth="sm" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Features
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" component="p">
            Quickly build an effective pricing table for your potential customers with this layout.
            It&apos;s built with default Material-UI components with little customization.
          </Typography>
        </Container>
      </Container>
      {/* End hero unit */}
    </React.Fragment>
  );
}

export default Features;