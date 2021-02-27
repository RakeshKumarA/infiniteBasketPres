import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GreenBG from '../../assets/greenbg.jpg';
import ICICI from '../../assets/icicilomb.jpg';
import MAX from '../../assets/max.jpg';
import STAR from '../../assets/star.jpeg';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 200,
    position: 'relative',
    backgroundImage: `url(${GreenBG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  rootres: {
    height: 400,
    position: 'relative',
    backgroundImage: `url(${GreenBG})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '2rem',
  },
  keyPartnerStyle: {
    fontWeight: 700,
    color: '#fff',
    flexGrow: 1,
  },
  keyPartnerStyleres: {
    fontWeight: 700,
    color: '#fff',
  },
  imgsize: {
    width: '150px',
    height: '50px',
    paddingRight: '20px',
  },
  container: {
    display: 'flex',
    flexGrow: 1,
  },
});

const CallToAction = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        component={Grid}
        container
        className={classes.root}
        display={{ xs: 'none', sm: 'flex' }}
        justify="center"
        alignItems="center"
      >
        <Grid item container md={9} sm={10} alignItems="center">
          <div className={classes.container}>
            <Typography
              variant="h4"
              color="initial"
              className={classes.keyPartnerStyle}
            >
              Our Key Partners
            </Typography>
            <img src={ICICI} alt="Mastercard" className={classes.imgsize} />
            <img src={MAX} alt="Mastercard" className={classes.imgsize} />
            <img src={STAR} alt="Mastercard" className={classes.imgsize} />
          </div>
        </Grid>
      </Box>
      <Box
        component={Grid}
        container
        className={classes.rootres}
        display={{ xs: 'flex', sm: 'none' }}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          md={9}
          sm={10}
          alignItems="center"
          direction="column"
          spacing={2}
        >
          <Grid item>
            <Typography
              variant="h4"
              color="initial"
              className={classes.keyPartnerStyleres}
            >
              Our Key Partners
            </Typography>
          </Grid>
          <Grid item>
            <img src={ICICI} alt="Mastercard" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={MAX} alt="Mastercard" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={STAR} alt="Mastercard" className={classes.imgsize} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CallToAction;
