import React from "react";
import Intro from "./Intro";
import { makeStyles } from "@material-ui/core/styles";
import Services from "./Services";
import Review from "./Review";
import Team from "./Team";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Showcase from "./Showcase";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div id="section1">
        <Showcase />
      </div>
      <div id="section2">
        <Intro />
      </div>

      <div id="section3">
        <Team />
      </div>
      <CallToAction />
    </div>
  );
};

export default Main;
