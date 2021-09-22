import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import image1 from "../../assets/healthInsurance_main.jpg";
import IntroCard2 from "./IntroCard2";

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
    textDecoration: "none",
    color: "blue",
  },
  tablePadding: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
});

const IntroHI = () => {
  const classes = useStyles();
  const caseStudies = [
    {
      caseNo: 1,
      caseTitle: "Case Study 1",
      caseContent:
        "Ravindra, aged 38, was an employee in one of the top MNC.  The company had given a health insurance of 8 lakhs to cover his spouse, kid and parents.  However, due to obligation from a relative, he had also purchased personal health insurance policy for his entire family to the tune of 25 lakhs.",
      caseContent2:
        "After 7 years of taking the policy, his mother was diagnosed with Cancer.  The medical expenses exceeded beyond 12 lakhs in one and half year.  At that time, the personal health policy came to the rescue.",
    },
    {
      caseNo: 2,
      caseTitle: "Case Study 2",
      caseContent:
        "Umesh, aged 32 years was working for a private company.  His company had provided a health insurance cover of 3 lakhs for his family of 3 (spouse and kid).  Since he was young and healthy, he did not see the necessity to invest in a personal health insurance policy.",
      caseContent2:
        "Unfortunately, at the age of 36 years, he met with a major accident and had a brain injury.  The medical bill was approximately 15 lakhs for two surgeries over a period of 6 months.  The family had to pay the expenses from their savings.",
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
              <Typography variant="h2" color="inherit">
                Health Insurance
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography
                variant="subtitle2"
                color="initial"
                style={{ paddingBottom: "2rem" }}
              >
                Health Insurance is a type of insurance that offers coverage to
                the policy holder for medical expenses in case of
                a health emergency. A health insurance plan chosen by the
                insured provides coverage for different expenses including
                surgical expenses, day-care expenses, and critical illness
                hospitalization, etc.
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
                <IntroCard2
                  caseTitle={caseStudy.caseTitle}
                  caseContent={caseStudy.caseContent}
                  caseContent2={caseStudy.caseContent2}
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

export default IntroHI;
