import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: 500,
    backgroundImage: "linear-gradient(45deg, #FAFAFA,#F5F5F5 100%)",
    padding: "2rem",
  },
  buttonTextStyle: {
    padding: "0 .5rem",
  },
  marginTop2rem: {
    marginTop: "2rem",
  },
});

const Intro = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleAboutClick = () => {
    history.push("/about");
  };
  return (
    <Grid container className={classes.root} justify="center">
      <Grid
        item
        container
        sm={5}
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item className={classes.marginTop2rem}>
          <Typography variant="h3" color="initial">
            InsureLeague
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" color="initial">
            Securing Lives
          </Typography>
        </Grid>
        <Grid item className={classes.marginTop2rem}>
          <Typography variant="body2" color="initial" align="center">
            InsureLeague is a Insurance Marketing firm with approval from IRDAI.
            With over 30 years of industry experience, we focus on giving tailor
            made insurance / investment/ risk mitigation solutions for MSME
            (Micro, Small & Medium Enterprises), HNI (High Networth Individuals)
            and NRI (Non - Resident Individuals) clients.
          </Typography>
        </Grid>
        <Grid item className={classes.marginTop2rem}>
          <Button variant="contained" color="primary">
            <Typography
              variant="subtitle2"
              color="initial"
              className={classes.buttonTextStyle}
              onClick={handleAboutClick}
            >
              LEARN MORE
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Intro;
