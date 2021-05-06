import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import image1 from "../../assets/nriInvestment_main.png";
import NRITable from "./NRITable";

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

const IntroNRI = () => {
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
              <Typography variant="h2" color="primary">
                Investment for NRIs
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography variant="subtitle2" color="initial">
                Today, India is ideally poised to become a globally dominant
                player and the Indian market offers immense business scope.
                Developed economies have widely acknowledged this and have
                become key investors in India’s growth story. Many investors who
                have invested in Indian business segments or are planning to do
                so are NRIs with credible stakes here in India.
              </Typography>
            </Grid>
            <Grid item>
              <a
                href="https://youtu.be/ELixoFd9-2c"
                target="blank"
                rel="noopener noreferrer"
                className={classes.externalLink}
              >
                {" "}
                <strong> More on NRI Investment</strong>{" "}
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.tablePadding}>
          <Box
            component={Grid}
            container
            display={{ xs: "none", lg: "flex" }}
            justify="center"
            alignItems="center"
          >
            <Grid item lg={7}>
              <Typography
                variant="h6"
                color="initial"
                style={{ paddingBottom: "2rem" }}
              >
                One strong reason for NRIs to invest in India is given below for
                your perusal: - Invest in your own Country and reap the benefits
                of growing with it.
              </Typography>
            </Grid>
            <Grid item lg={7}>
              <Typography
                variant="subtitle2"
                color="initial"
                style={{ color: "red" }}
              >
                Interest rates across the world & India is the Best!!!
              </Typography>
              <NRITable />
            </Grid>
            <Grid item lg={7}>
              <Typography
                variant="h6"
                color="initial"
                style={{ paddingTop: "2rem" }}
              >
                A part of your savings should be invested to get guaranteed
                returns. These returns can be lumpsum/monthly/yearly payouts
                based on your requirement. The amounts can be ear marked for
                higher education of children, retirement benefits etc.
              </Typography>
            </Grid>
          </Box>
          <Box
            component={Grid}
            container
            className={classes.rootres}
            display={{ md: "flex", lg: "none" }}
            justify="center"
            alignItems="center"
          >
            <Typography
              variant="h6"
              color="initial"
              align="center"
              style={{ padding: "0 2rem 1rem 1rem" }}
            >
              One strong reason for NRIs to invest in India is given below for
              your perusal: - Invest in your own Country and reap the benefits
              of growing with it.
            </Typography>
            <Typography
              variant="subtitle2"
              color="initial"
              style={{ color: "red" }}
            >
              Interest rates across the world & India is the Best!!!
            </Typography>
            <NRITable />
            <Typography
              variant="h6"
              color="initial"
              align="center"
              style={{ padding: "2rem 2rem 1rem 1rem" }}
            >
              A part of your savings should be invested to get guaranteed
              returns. These returns can be lumpsum/monthly/yearly payouts based
              on your requirement. The amounts can be ear marked for higher
              education of children, retirement benefits etc.
            </Typography>
          </Box>
        </Grid>
      </div>
    </>
  );
};

export default IntroNRI;
