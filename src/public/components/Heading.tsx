import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ResponsiveImage from '../../common/component/ResponsiveImage';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#3f51b5",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));

function Heading() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="xl" component="main" className={classes.container}>
        <Container maxWidth="sm" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" gutterBottom style={{ color: "#FFFFFF" }}>
            Demo
          </Typography>
          <ResponsiveImage
            src="https://www.w3schools.com/w3css/img_lights.jpg"
            alt="Demo image"
            width={1200}
            height={800} />
        </Container>
      </Container>
      {/* End hero unit */}
    </React.Fragment>
  );
}

export default Heading;