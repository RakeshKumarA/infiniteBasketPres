import React from 'react';
import Intro from './Intro';
import { makeStyles } from '@material-ui/core/styles';
import Services from './Services';
import Review from './Review';
import Team from './Team';
import CallToAction from './CallToAction';
import Contact from './Contact';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Intro />
      <Services />
      <Review />
      <Team />
      <CallToAction />
      <Contact />
    </div>
  );
};

export default Main;
