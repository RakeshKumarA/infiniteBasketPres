import React from "react";
import Intro from "./Intro";
import { makeStyles } from "@material-ui/core/styles";
import Team from "./Team";
import CallToAction from "./CallToAction";
import Showcase from "./Showcase";
import Footer from "../footer/Footer";
import { Box, Grid } from "@material-ui/core";
import ShowcaseRes from "./ShowcaseRes";

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
        <Box component={Grid} display={{ xs: "none", lg: "flex" }}>
          <Showcase />
        </Box>
        <Box component={Grid} display={{ xs: "flex", lg: "none" }}>
          <ShowcaseRes />
        </Box>
      </div>
      <div id="section3">
        <Team />
      </div>
      <CallToAction />
      <div id="section4">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
