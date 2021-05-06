import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import image1 from "../../assets/hniRetirement_main.png";

const useStyles = makeStyles({
  mediaStyle: {
    width: "100%",
    height: "80vh",
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
                Retirement Plans are insurance products which help you
                accumulate savings over a long period of time, providing
                financial security for your future. Pension plans help you in
                building a corpus to ensure a steady income flow after
                retirement.
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                style={{ paddingBottom: "2rem" }}
              >
                With the proceeds of the retirement/pension plans, you can also
                opt for monthly pension benefits by purchasing annuity plans.
                Further, with dual benefits of protection with investment,
                pension plans are ideal to help you prepare for your financial
                needs in the golden years of your life
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
