import {
  Card,
  Divider,
  Grid,
  makeStyles,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    height: 275,
    background: '#212121',
  },
  cardStyle: {
    height: '100%',
    background: '#212121',
    color: '#fff',
  },
  cardContainer: {
    height: '100%',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 700,
  },
  cardInsideContainer: {
    padding: '2rem',
  },
  solidLine: {
    borderTop: '3px solid #4CAF50',
    width: '15%',
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
      <Grid item container md={9} sm={10} className={classes.cardContainer}>
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
                <Button variant="contained" color="primary">
                  Contact us
                </Button>
              </Grid>
              <Grid item container>
                <IconButton size="small">
                  <FacebookIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton size="small">
                  <LinkedInIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton size="small">
                  <TwitterIcon color="primary" fontSize="large" />
                </IconButton>
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
                <Grid item>
                  <MailIcon color="primary" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    className={classes.contEmailTitle}
                  >
                    Email
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    className={classes.contEmailContent}
                  >
                    infinitebasketimf@gmail.com
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item>
                  <LocationOnIcon color="primary" />
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    className={classes.contEmailTitle}
                  >
                    Registered Address
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    className={classes.contEmailContent}
                  >
                    Infinite Basket Insurance Marketing Pvt. Ltd. 10/106, 11th A
                    Cross,
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    className={classes.contEmailContent}
                  >
                    10th Main Malleswaram, Bangalore – 560 003, Karnataka, India
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    className={classes.contEmailContent}
                  >
                    Landline: +91 080 23560205 Mobile: + 91 98452 31663 / 99006
                    00661
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
