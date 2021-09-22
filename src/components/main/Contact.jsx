import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SendEmail from '../../assets/Sendemail.png';
import Typography from '@material-ui/core/Typography';
import { Card, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 850,
    position: 'relative',
    backgroundImage: `url(${SendEmail})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  cardContainerStyle: {
    width: '100%',
  },
  cardStyle: {
    padding: '2.5rem 2rem',
    width: '100%',
    maxWidth: 550,
  },
  paddingbottom1rem: {
    paddingBottom: '1rem',
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item container md={5} sm={10} alignItems="center" justify="center">
        <Grid item className={classes.paddingbottom1rem} xs={10}>
          <Typography variant="h3" color="initial" align="center">
            Send Us an Email
          </Typography>
        </Grid>
        <Grid item className={classes.paddingbottom1rem} xs={10}>
          <Typography variant="body2" color="initial" align="center">
            Send us all your requests or questions by submitting the below form.
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify="center"
          className={classes.cardContainerStyle}
        >
          <Card className={classes.cardStyle} elevation={4}>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    name="name"
                  />
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="Contact Number"
                      name="contactNumber"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      size="small"
                      name="email"
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    name="subject"
                    size="small"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Description"
                    variant="outlined"
                    multiline
                    name="message"
                    rows={8}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
