import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './services.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 450,
    padding: '2rem',
  },
});

const Review = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item container md={9} sm={10} direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h3" color="initial">
            What Sets us apart
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="initial">
            InsureLeague is the brand of Infinite Basket Insurance Marketing
            Pvt. Ltd., an Insurance Regulatory Development Authority of India
            (IRDAI) approved venture impacting lives with over 30+ Years of
            industry experience. The firm leverages the experience of our team
            members and is backed by a strong team of qualified advisory
            members. Our key focus is to provide our clients the tools - to
            mitigate risk, secure their future and plan for their goals -
            through customized advisory.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="initial">
            Over the last few years, we have catered to the requirements of 120+
            clientele including corporates & NRIs. Infinite Basket offers
            professional and unbiased advice, ethical conduct, support for claim
            settlement & full disclosure of all information to our customers, to
            make an informed decision. The transparency with which we advise our
            clients has helped us build strong trust among our clients.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Review;
