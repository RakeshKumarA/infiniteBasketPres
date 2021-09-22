import { Box, Card, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  topmargin: {
    paddingTop: "8rem",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
  },
  headingStyle: {
    fontSize: "2rem",
    fontWeight: 500,
  },
  cardStyleLarge: {
    height: "35vh",
  },
  cardStyleMedium: {
    height: "25vh",
  },
  cardStyleSmall: {
    height: "48vh",
  },
  cardTitleStyle: {
    padding: "1rem 0",
    backgroundColor: "#4CAF50",
  },
  cardContentStyle: {
    padding: "1rem 2rem",
  },
  cardContainer: {
    paddingBottom: "2rem",
  },
});

const Intro2 = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item container direction="column" xs={9}>
        <Grid item className={classes.topmargin}>
          <Typography variant="h3" color="initial">
            InsureLeague
          </Typography>
        </Grid>
        <Grid item>
          <p>
            InsureLeague is the brand of <strong>Infinite Basket</strong>{" "}
            Insurance Marketing Pvt. Ltd., an Insurance Regulatory Development
            Authority of India (IRDAI) approved venture impacting lives with
            over 30+ Years of industry experience. The firm leverages the
            experience of our team members and is backed by a strong team of
            qualified advisory members. Our key focus is to provide our clients
            the tools - to mitigate risk, secure their future and plan for their
            goals - through customized advisory. InsureLeague is a brand
            committed to making your long term goals for your family and
            business “a reality” during your presence and absence. To provide
            your family the safety net of financial security, providing you the
            freedom to follow your dreams.
          </p>
        </Grid>
        <Grid item className={classes.cardContainer}>
          <p>
            We are a group of professionals, empowering and educating people at
            large, on the requirement for sufficient insurance cover. We provide
            reliable, unbiased solutions to mitigate risk in both personal life
            as well as in business. We assist in choosing the right kind of
            coverage and also provide exceptional pre and post issuance service.
            We also provide assistance for other financial requirements.
          </p>
        </Grid>
        <Box
          component={Grid}
          item
          container
          display={{ xs: "none", lg: "flex", xl: "flex" }}
          justify="center"
          spacing={2}
        >
          <Grid item xs={10} md={6} lg={4}>
            <Card className={classes.cardStyleLarge}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Mission
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    InsureLeague is a brand committed to making your long term
                    goals for your family and business “a reality” during your
                    presence and absence. We strive to provide your family the
                    safety net of financial security, and provide you the
                    freedom to follow your dreams.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={10} md={6} lg={4}>
            <Card className={classes.cardStyleLarge}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Vision
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    We empower and educate business organization and
                    individuals, on the requirement for sufficient insurance
                    cover to mitigate risk in both business and personal life.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={10} md={6} lg={4}>
            <Card className={classes.cardStyleLarge}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Values
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    Our team’s focus is to be customer centric, unbiased,
                    transparent, solution oriented, timely and provide prompt
                    pre and post issuance service.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Box>
        <Box
          component={Grid}
          item
          container
          display={{ xs: "none", md: "flex", lg: "none" }}
          justify="center"
          spacing={2}
        >
          <Grid item xs={10} md={4} lg={4}>
            <Card className={classes.cardStyleMedium}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Mission
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    InsureLeague is a brand committed to making your long term
                    goals for your family and business “a reality” during your
                    presence and absence. We strive to provide your family the
                    safety net of financial security, and provide you the
                    freedom to follow your dreams.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={10} md={4} lg={4}>
            <Card className={classes.cardStyleMedium}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Vision
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    We empower and educate business organization and
                    individuals, on the requirement for sufficient insurance
                    cover to mitigate risk in both business and personal life.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={10} md={4} lg={4}>
            <Card className={classes.cardStyleMedium}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Values
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    Our team’s focus is to be customer centric, unbiased,
                    transparent, solution oriented, timely and provide prompt
                    pre and post issuance service.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Box>
        <Box
          component={Grid}
          item
          container
          display={{ xs: "flex", sm: "flex", md: "none" }}
          justify="center"
          spacing={2}
        >
          <Grid item xs={10} sm={6} md={4} lg={4}>
            <Card className={classes.cardStyleSmall}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Mission
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    InsureLeague is a brand committed to making your long term
                    goals for your family and business “a reality” during your
                    presence and absence. We strive to provide your family the
                    safety net of financial security, and provide you the
                    freedom to follow your dreams.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={4} lg={4}>
            <Card className={classes.cardStyleSmall}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Vision
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    We empower and educate business organization and
                    individuals, on the requirement for sufficient insurance
                    cover to mitigate risk in both business and personal life.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={4} lg={4}>
            <Card className={classes.cardStyleSmall}>
              <Grid container direction="column">
                <Grid item className={classes.cardTitleStyle}>
                  <Typography
                    variant="h6"
                    color="initial"
                    align="center"
                    style={{ fontWeight: "600" }}
                  >
                    Our Values
                  </Typography>
                </Grid>
                <Grid item className={classes.cardContentStyle}>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    Our team’s focus is to be customer centric, unbiased,
                    transparent, solution oriented, timely and provide prompt
                    pre and post issuance service.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Box>
        <Grid item>
          <Typography
            variant="h4"
            color="initial"
            className={classes.headingStyle}
            style={{ paddingTop: "2rem" }}
          >
            Our Story
          </Typography>
        </Grid>
        <Grid item>
          <p>
            Here at InsureLeague, we appreciate your love for your family. Life
            has its way of bringing twists and turns. That’s why we have
            embarked on a journey to create insurance awareness and empower you
            with the right knowledge, so that you can choose the right kind of
            insurance products to mitigate risks at various life stages.
          </p>
          <p>Now, bridge the gaps and enjoy a secured LIFE!!!</p>
          <p>Why we do this?</p>
          <p>
            Seeing a near and dear one suffer due to an eventuality in life has
            been painful. Financial stability at all stages of life gives the
            strength to take LIFE Head-on. In our experience of 30 years, we
            have witnessed families suffer due to lack of risk cover. Being a
            socially responsible team, we saw the gap in awareness and coverage.
            We saw an opportunity to be the reason for “A smile on the face of
            family members in times of distress”.
          </p>
          <p>
            The brand InsureLeague is an emotion – for us, our customers and
            their families – and includes
          </p>
          <ul>
            <li>Assurance</li>
            <li>Protection</li>
            <li>Guarantee</li>
            <li>Preparation</li>
            <li>Longevity</li>
            <li>Stability</li>
          </ul>
        </Grid>
        <Grid item container>
          <Grid item>
            <Typography
              variant="h4"
              color="initial"
              className={classes.headingStyle}
              style={{ paddingTop: "2rem" }}
            >
              What sets us apart
            </Typography>
          </Grid>
          <Grid item>
            <p>
              InsureLeague is the brand of Infinite Basket Insurance Marketing
              Pvt. Ltd., a Bangalore based Insurance Regulatory Development
              Authority of India (IRDAI) approved venture Securing lives. We
              leverage the experience of our team members and are backed by a
              strong team of qualified advisory members. Our key focus is to
              provide our clients the tools - to mitigate risk, secure their
              future and plan for their goals - through customized insurance
              advisory.
            </p>
            <p>
              Over the last few years, we have catered to the requirements of
              120+ clientele including MSME & NRIs. InsureLeague team provides
              complete information of the insurance plans, unbiased advice,
              ethical conduct, support for claim settlement & full disclosure of
              all information to our customers, to make an informed decision.
              The transparency with which we advise our clients has helped us
              build strong trust among our clients.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Intro2;
