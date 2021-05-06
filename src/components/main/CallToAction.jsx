import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GreenBG from "../../assets/greenbg.jpg";
import hdfcergo from "../../assets/hdfc-ergo.png";
import star from "../../assets/star.jpeg";
import hdfclife from "../../assets/HDFC_Life_Logo.png";
import maxlife from "../../assets/max-life-1.jpg";
import maxbupa from "../../assets/maxBupa.png";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 200,
    position: "relative",
    backgroundImage: `url(${GreenBG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  rootres: {
    height: 600,
    position: "relative",
    backgroundImage: `url(${GreenBG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "2rem",
  },
  keyPartnerStyle: {
    fontWeight: 700,
    color: "#fff",
    flexGrow: 1,
  },
  keyPartnerStyleres: {
    fontWeight: 700,
    color: "#fff",
  },
  imgsize: {
    width: "100px",
    height: "65px",
    paddingRight: "20px",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  logolocation: {
    paddingleft: "10rem",
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
        display={{ xs: "none", sm: "flex" }}
        justify="center"
        alignItems="center"
      >
        <Grid item container md={9} sm={10} alignItems="center" spacing={4}>
          <Grid item>
            <Typography
              variant="h4"
              color="initial"
              className={classes.keyPartnerStyle}
            >
              Our Key Partners
            </Typography>
          </Grid>
          <Grid item>
            <img src={hdfcergo} alt="HDFCERFO" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={hdfclife} alt="HDFCLIFE" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={maxlife} alt="MAXLIFE" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={maxbupa} alt="MAXBUPA" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={star} alt="STARHEALTH" className={classes.imgsize} />
          </Grid>
        </Grid>
      </Box>
      <Box
        component={Grid}
        container
        className={classes.rootres}
        display={{ xs: "flex", sm: "none" }}
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
            <img src={hdfcergo} alt="Mastercard" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={hdfclife} alt="Mastercard" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={maxlife} alt="Mastercard" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={maxbupa} alt="Mastercard" className={classes.imgsize} />
          </Grid>
          <Grid item>
            <img src={star} alt="STARHEALTH" className={classes.imgsize} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CallToAction;
