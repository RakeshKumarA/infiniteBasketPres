import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import image1 from "../../assets/termPlans_main.png";
import IntroCard from "./IntroCard";

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
});

const IntroTerm = () => {
  const classes = useStyles();

  const caseStudies = [
    {
      caseNo: 1,
      caseTitle: "Case Study 1",
      caseContent:
        "Rajesh, an IT professional aged 35 years had an annual income of 18 lakhs. In June 2019, he passed away due to dengue. He had taken a term insurance to the tune of 3 Cr. This amount was paid to the nominee (his wife).",
      casepointers: [],
    },
  ];

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
              <Typography variant="h2" color="primary">
                Term Plans
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle2" color="initial">
                Term insurance is a type of life insurance policy that provides
                coverage for a certain period of time or a specified "term" of
                years. If the insured expires during the time period specified
                in the policy and the policy is active, or in force, a death
                benefit will be paid. It provides maximum coverage at reasonable
                premium payouts.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container justify="center">
        <Grid item container xs={9} direction="column">
          <Grid item className={classes.title}>
            <Typography variant="h2" color="initial">
              Case Studies
            </Typography>
          </Grid>
          <Grid item container spacing={2} className={classes.cardContainer}>
            {caseStudies.map((caseStudy) => {
              return (
                <IntroCard
                  caseNo={caseStudy.caseNo}
                  caseTitle={caseStudy.caseTitle}
                  caseContent={caseStudy.caseContent}
                  casepointers={caseStudy.casepointers}
                  key={caseStudy.caseNo}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default IntroTerm;
