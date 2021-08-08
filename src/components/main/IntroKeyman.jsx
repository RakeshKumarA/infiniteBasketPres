import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import image1 from "../../assets/keymanInsurance_main.jpg";
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

const IntroKeyman = () => {
  const classes = useStyles();

  const caseStudies = [
    {
      caseNo: 1,
      caseTitle: "Pvt Ltd Company turnover 340 Crores",
      caseContent:
        "In March 2020, one of the Directors of Pvt Ltd Company had been to Berlin to sign an IT Contract, but he passed away due to an accident.",
      casepointers: [
        "In 2012, the Company had taken a Key Man Insurance policy for 24 Crores.",
        "The Claim amount of Rs 24 Crores was credited to the company account.",
        "The existing Director paid the amount to the wife of the deceased Director & took the control (shares) of the company.",
      ],
    },
    {
      caseNo: 2,
      caseTitle: "Partnership Firm turnover of 46 Crores",
      caseContent:
        "In April 2020 a Businessman (Partnership firm) aged 35 Years passed away due to Corona Virus infection in Chennai.",
      casepointers: [
        "Businessman had taken a loan for 8 Crores and his wife (Partner) is unable to run the business",
        "Businessman had a cover of 30 Lakhs insurance.",
        "Lenders (Bankers) had to dispose off the property as the interest was mounting & business came to halt.",
      ],
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
                Keyman Insurance
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle2" color="initial">
                Keyman insurance policy has been defined by Insurance Regulatory
                and Development Authority of India (IRDAI) as an insurance
                policy taken out by a business, to compensate for financial
                losses that would arise from the death of an important member of
                that business.
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                style={{ fontWeight: "800", fontSize: "1rem", color: "red" }}
              >
                Every business owner (Directors / Partners / Proprietors etc)
                must subscribe to this policy.
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

export default IntroKeyman;
