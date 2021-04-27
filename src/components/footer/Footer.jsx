import {
  Card,
  Divider,
  Grid,
  makeStyles,
  Typography,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    height: "55vh",
    background: "#212121",
  },
  cardStyle: {
    height: "100%",
    background: "#212121",
    color: "#fff",
  },
  cardContainer: {
    height: "100%",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 700,
  },
  cardInsideContainer: {
    padding: "2rem",
  },
  solidLine: {
    borderTop: "3px solid #4CAF50",
    width: "15%",
  },
  contEmailTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  contEmailContent: {
    fontSize: 14,
    fontWeight: 400,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Box
        component={Grid}
        item
        container
        lg={10}
        display={{ xs: "none", lg: "flex", xl: "flex" }}
        className={classes.cardContainer}
      >
        <Grid item sm={6}>
          <Card className={classes.cardStyle} elevation={4}>
            <Grid
              container
              direction="column"
              className={classes.cardInsideContainer}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.titleStyle}
                >
                  About us
                </Typography>
                <Divider className={classes.solidLine} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="initial">
                  InsureLeague is a brand committed to making your long term
                  goals for your family and business “a reality” during your
                  presence and absence.
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  href="tel:+919900600661"
                >
                  Contact us
                </Button>
              </Grid>
              <Grid item container>
                <IconButton
                  size="small"
                  size="small"
                  href="https://www.facebook.com/InsureLeague"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton
                  size="small"
                  size="small"
                  href="https://www.linkedin.com/company/insureleague"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton
                  size="small"
                  size="small"
                  href="https://instagram.com/insureleague?igshid=150uubg8s3y3i"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon color="primary" fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  style={{ color: "red" }}
                >
                  Disclaimer
                </Typography>
                <Typography variant="caption" color="initial">
                  <Box fontStyle="italic" m={1}>
                    BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS/FRADULENT OFFERS
                  </Box>
                </Typography>
                <Typography variant="caption" color="initial">
                  <Box fontStyle="italic" m={1}>
                    IRDAI is not involved in activities like selling insurance
                    policies, announcing bonus or investment of premiums. Public
                    receiving such phone calls are requested to lodge a police
                    complaint.
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card className={classes.cardStyle} elevation={4}>
            <Grid
              container
              direction="column"
              className={classes.cardInsideContainer}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.titleStyle}
                >
                  Contact
                </Typography>
                <Divider className={classes.solidLine} />
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item lg={1}>
                  <a href="mailto:info@insureleague.com">
                    <MailIcon color="primary" />
                  </a>
                </Grid>
                <Grid item container lg={11} direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.contEmailTitle}
                    >
                      Email
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      info@insureleague.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item lg={1}>
                  <LocationOnIcon color="primary" />
                </Grid>
                <Grid item container lg={11} direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.contEmailTitle}
                    >
                      Registered Address
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      Infinite Basket Insurance Marketing Pvt. Ltd. 10/106, 11th
                      A Cross, 10th Main Malleswaram, Bangalore – 560 003,
                      Karnataka, India
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      Landline: +91 080 23560205 Mobile: + 91 98452 31663 /
                      99006 00661
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Box>
      <Box
        component={Grid}
        item
        container
        md={12}
        display={{ xs: "flex", lg: "none", xl: "none" }}
        // className={classes.cardContainer}
        direction="column"
      >
        <Grid item>
          <Card className={classes.cardStyle} elevation={4}>
            <Grid
              container
              direction="column"
              className={classes.cardInsideContainer}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.titleStyle}
                >
                  About us
                </Typography>
                <Divider className={classes.solidLine} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="initial">
                  InsureLeague is a brand committed to making your long term
                  goals for your family and business “a reality” during your
                  presence and absence.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  href="tel:+919900600661"
                >
                  Contact Us
                </Button>
              </Grid>
              <Grid item container>
                <IconButton
                  size="small"
                  href="https://www.facebook.com/InsureLeague"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://www.linkedin.com/company/insureleague"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://instagram.com/insureleague?igshid=150uubg8s3y3i"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon color="primary" fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  style={{ color: "red" }}
                >
                  Disclaimer
                </Typography>
                <Typography variant="caption" color="initial">
                  <Box fontStyle="italic">
                    BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS/FRADULENT OFFERS
                  </Box>
                </Typography>
                <Typography variant="caption" color="initial">
                  <Box fontStyle="italic">
                    IRDAI is not involved in activities like selling insurance
                    policies, announcing bonus or investment of premiums. Public
                    receiving such phone calls are requested to lodge a police
                    complaint.
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.cardStyle} elevation={4}>
            <Grid
              container
              direction="column"
              className={classes.cardInsideContainer}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.titleStyle}
                >
                  Contact
                </Typography>
                <Divider className={classes.solidLine} />
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item lg={1}>
                  <a href="mailto:info@insureleague.com">
                    <MailIcon color="primary" />
                  </a>
                </Grid>
                <Grid item container lg={11} direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.contEmailTitle}
                    >
                      Email
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      info@insureleague.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item lg={1}>
                  <LocationOnIcon color="primary" />
                </Grid>
                <Grid item container lg={11} direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.contEmailTitle}
                    >
                      Registered Address
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      Infinite Basket Insurance Marketing Pvt. Ltd. 10/106, 11th
                      A Cross, 10th Main Malleswaram, Bangalore – 560 003,
                      Karnataka, India
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      Landline: +91 080 23560205 Mobile: + 91 98452 31663 /
                      99006 00661
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Footer;
