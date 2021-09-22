import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import image1 from "../../assets/generalInsurance_main.jpg";
import IntroCard3 from "./IntroCard3";

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

const IntroGI = () => {
  const classes = useStyles();

  const caseStudies = [
    {
      caseNo: 1,
      caseTitle: "Director’s liability insurance",
      caseContent: [
        "Being a director or an officer of a company is a high risk profession. If held personally liable for their own and fellow Directors' decisions, one could face serious financial loss through litigation from shareholders, creditors, competitors, suppliers, regulatory bodies, etc.",
        "Directors' and Officers' Liability policy is affordable and offers you security and protection. The policy can advance defense costs as they are incurred and provides some of the broadest coverage available on the 'form of choice' of the industry.",
      ],
    },
    {
      caseNo: 2,
      caseTitle: "Cyber Security Insurance",
      caseContent: [
        "Companies with access to private & confidential information about their customers have a responsibility to keep it secure. Equally, companies who have a web presence ora dependency on technology have emerging content and transactional exposures.",
        "Security/Data breaches affect millions of records a year and reports of breaches continue to rise at a dramatic rate. The introduction of viruses and unauthorized access are well known examples.",
        "Cyber Security is designed to protect commercial businesses occurring out of cyber exposures associated with e-business, internet, networks and information assets.",
      ],
    },
    {
      caseNo: 3,
      caseTitle: "Workmen compensation policy",
      caseContent: [
        "It is one of the primary insurance policy that any business needs.  Availing a customized policy can provide you protection against cost of compensation claims arising from on-the-job injuries or illnesses suffered by employees.  In spite of statutory requirement, having a well-designed workmen compensation policy as per the business nature has become a prime necessity with the growing economy.  ",
        "Workmen compensation policy can be an effective solution for your business against employee-related legal liabilities.",
      ],
    },
    {
      caseNo: 4,
      caseTitle: "Contractors All Risk Insurance",
      caseContent: [
        "A construction site is susceptible to all sorts of Accidents. Losses can mount from pilferage, theft, damage, legal claims and more.  As a contractor we understand the need to ensure completion within the deadlines. ",
        "The Contractor’s All Risk Insurance policy covers the risks during construction, comprehensively. It includes physical loss or damage to property, plant, machinery and tools, works brought on to the site and temporary works erected on-site, as well as third party Liability related to work conducted on the site.",
      ],
    },
    {
      caseNo: 5,
      caseTitle: "Group Health Insurance plans",
      caseContent: [
        "In our day to day lives, we are exposed to many risks associated either with accidents or illnesses. And with the ever increasing costs associated with Hospitalization, it can mean a drain on your precious savings. Not any more. ",
        "With the Group Mediclaim policy, you can provide your employees/members the optimum cover they require.",
      ],
    },
    {
      caseNo: 6,
      caseTitle: "Group Personal Accident Policy",
      caseContent: [
        "In an increasingly competitive business scenario, every organization has to stay prepared for the unexpected. It applies not just to the area you operate in, but also to your employees. After all, no one can afford to lose people, whether to illness, accidents.  ",
        "With a choice of comprehensive insurance plans that provide powerful incentives for you and peace of mind for your people.",
      ],
    },
    {
      caseNo: 1,
      caseTitle: "Group Term Insurance Plans",
      caseContent: [
        "Whatever the business, it is the people who make it a success. Everybody requires some type of life insurance, especially when others depend on them financially.",
        "Group Term Insurance Plan meets this need and serves as an ideal way for employers to reinforce their bond with their employees. The sort of needs, you, as an employer need to cater to could be in form of 'Employee benefits'.",
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
              <Typography variant="h2" color="inherit">
                General Insurance
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container justify="center">
        <Grid item container xs={9} direction="column">
          <Grid item className={classes.title}>
            <Typography variant="h2" color="initial">
              Types of General Insurance
            </Typography>
          </Grid>
          <Grid item container spacing={2} className={classes.cardContainer}>
            {caseStudies.map((caseStudy) => {
              return (
                <IntroCard3
                  caseNo={caseStudy.caseNo}
                  caseTitle={caseStudy.caseTitle}
                  caseContent={caseStudy.caseContent}
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

export default IntroGI;
