import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import image1 from "../../assets/hniRetirement_main.jpg";

const useStyles = makeStyles({
  mediaStyle: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${image1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  gridcontainer: {
    height: "100%",
  },
  title: {
    paddingTop: "3rem",
  },
  cardContainer: {
    paddingTop: "3rem",
  },
  externalLink: {
    paddingTop: "2rem",
    textDecoration: "none",
    color: "blue",
  },
  tablePadding: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
});

const Introhni = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mediaStyle}>
        <Grid container className={classes.gridcontainer} justify="center">
          <Grid
            item
            container
            xs={10}
            lg={8}
            justify="center"
            direction="column"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h2" color="inherit">
                HNI Retirement
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography
                variant="subtitle2"
                color="initial"
                style={{ paddingBottom: "2rem" }}
              >
                As much as building wealth is important, retaining the wealth
                and generating a steady source of income from it is equally
                important.
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                style={{ paddingBottom: "2rem" }}
              >
                Guaranteed income insurance plans do not depend upon the market
                and ensures to provide you fixed returns at the frequency and
                rate that you deem fit. A portion of the wealth generated when
                invested in these plans, provide the steady income at guaranteed
                interest rates for a long duration along with risk cover.
              </Typography>
              <a
                href="https://youtu.be/rhFRgUEt72U"
                target="blank"
                rel="noopener noreferrer"
                className={classes.externalLink}
              >
                <strong> More on HNI Retirement</strong>{" "}
              </a>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Introhni;
