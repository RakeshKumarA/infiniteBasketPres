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
      <Grid
        item
        container
        md={5}
        sm={10}
        alignItems="center"
        justify="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h3" color="initial" align="center">
            Send Us an Email
          </Typography>
        </Grid>
        <Grid item>
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
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item container spacing={2}>
                <Grid item sm={6}>
                  <TextField
                    label="Contact Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={8}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
