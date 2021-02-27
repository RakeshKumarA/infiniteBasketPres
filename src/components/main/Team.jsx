import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './services.css';
import Teampic from '../../assets/FinalTeamBG.png';
import Typography from '@material-ui/core/Typography';
import { Box, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    height: '80vh',
    position: 'relative',
    backgroundImage: `url(${Teampic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '2rem',
  },
  resprootmdsm: {
    height: '80vh',
    padding: '2rem',
  },
  resprootxs: {
    height: '140vh',
    padding: '2rem',
  },
  titleStyle: {
    fontSize: 48,
    fontWeight: 700,
  },
});

const Team = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        component={Grid}
        container
        className={classes.root}
        justify="center"
        display={{ xs: 'none', md: 'none', sm: 'none', lg: 'flex' }}
      >
        <Grid item container sm={9}>
          <Grid
            item
            container
            sm={6}
            direction="column"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="h1"
                color="initial"
                className={classes.titleStyle}
              >
                The Team
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Jaisimha NS
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/jaisimha-n-s-686a719/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  With over 25 + Years experience in Banking & Finance, held
                  leadership roles with Lakshmi Vilas Bank, Axis Bank.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Indu Ramanujam
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/indu-ramanujam-3bb64423/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Commerce graduate, with over 4+ Years experience as a
                  Financial advisor. Associated with Industry best Insurance
                  companies - Max Life, ICICI Lombard, Star Health.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Arun Kumar
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/indu-ramanujam-3bb64423/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Arun is the Head – New Initiatives. Arun is a triple post
                  graduate, with degrees in Management, Psychology and Mass
                  Communication. He has an overall experience of 20+ years in
                  various sectors like IT, Insurance and Banking.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        component={Grid}
        container
        className={classes.resprootmdsm}
        justify="center"
        display={{ xs: 'none', sm: 'flex', md: 'flex', lg: 'none' }}
      >
        <Grid item container sm={9}>
          <Grid
            item
            container
            sm={10}
            direction="column"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="h1"
                color="initial"
                className={classes.titleStyle}
              >
                The Team
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Jaisimha NS
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/jaisimha-n-s-686a719/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  With over 25 + Years experience in Banking & Finance, held
                  leadership roles with Lakshmi Vilas Bank, Axis Bank.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Indu Ramanujam
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/indu-ramanujam-3bb64423/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Commerce graduate, with over 4+ Years experience as a
                  Financial advisor. Associated with Industry best Insurance
                  companies - Max Life, ICICI Lombard, Star Health.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Arun Kumar
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/indu-ramanujam-3bb64423/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Arun is the Head – New Initiatives. Arun is a triple post
                  graduate, with degrees in Management, Psychology and Mass
                  Communication. He has an overall experience of 20+ years in
                  various sectors like IT, Insurance and Banking.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        component={Grid}
        container
        className={classes.resprootxs}
        justify="center"
        display={{ xs: 'flex', sm: 'none', md: 'none', lg: 'none' }}
      >
        <Grid item container sm={9}>
          <Grid
            item
            container
            sm={10}
            direction="column"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="h1"
                color="initial"
                className={classes.titleStyle}
              >
                The Team
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Jaisimha NS
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/jaisimha-n-s-686a719/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  With over 25 + Years experience in Banking & Finance, held
                  leadership roles with Lakshmi Vilas Bank, Axis Bank.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Indu Ramanujam
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/indu-ramanujam-3bb64423/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Commerce graduate, with over 4+ Years experience as a
                  Financial advisor. Associated with Industry best Insurance
                  companies - Max Life, ICICI Lombard, Star Health.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography variant="h2" color="initial">
                    Arun Kumar
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    href="https://www.linkedin.com/in/indu-ramanujam-3bb64423/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon color="primary" />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Arun is the Head – New Initiatives. Arun is a triple post
                  graduate, with degrees in Management, Psychology and Mass
                  Communication. He has an overall experience of 20+ years in
                  various sectors like IT, Insurance and Banking.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Team;
