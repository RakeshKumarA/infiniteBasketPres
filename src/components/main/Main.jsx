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
      <div id="section1">
        <Intro />
      </div>
      {/* <div id="section2">
        <Services />
      </div>*/}
      <div id="section3">
        <Review />
      </div>
      <div id="section4">
        <Team />
      </div>
      <CallToAction />
      <div id="section5">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
