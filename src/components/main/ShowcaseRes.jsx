import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
SwiperCore.use([
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
]);

const useStyles = makeStyles({
  mediaStyle: {
    width: "100%",
    height: "100vh",
  },
  buttonStyle: {
    paddingBottom: "5rem",
  },
});

const ShowcaseRes = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = {
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const aboutHandler = () => {
    history.push("/about");
  };
  const keymanHandler = () => {
    history.push("/keyman");
  };
  const termHandler = () => {
    history.push("/termplan");
  };
  const nriHandler = () => {
    history.push("/nriinsure");
  };
  const giHandler = () => {
    history.push("/generalinsure");
  };
  const hniHandler = () => {
    history.push("/retire");
  };
  const healthHandler = () => {
    history.push("/healthinsure");
  };

  return (
    <Swiper {...params}>
      <Grid
        container
        style={{
          padding: 40,
          backgroundColor: "#4caf50",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.mediaStyle}
        >
          <Grid item>
            <Typography variant="h3" color="initial">
              InsureLeague
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" color="initial">
              Securing Lives
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="initial" align="center">
              InsureLeague is a Insurance Marketing firm with approval from
              IRDAI. With over 30 years of industry experience, we focus on
              giving tailor made insurance / investment/ risk mitigation
              solutions for MSME (Micro, Small & Medium Enterprises), HNI (High
              Networth Individuals) and NRI (Non - Resident Individuals)
              clients.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={aboutHandler}>
              Know More
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: 40,
          backgroundColor: "#5aa02c",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.mediaStyle}
        >
          <Grid item>
            <Typography variant="h3" style={{ color: "#fff" }} align="center">
              NRI Investments
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" style={{ color: "#fff" }} align="center">
              Enjoy Life at Every Stage
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={nriHandler}>
              Know More
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: 40,
          backgroundColor: "#73814c",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.mediaStyle}
        >
          <Grid item>
            <Typography variant="h3" style={{ color: "#fff" }} align="center">
              HNI Retirement
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" style={{ color: "#fff" }} align="center">
              Enjoy the freedom of life
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={hniHandler}>
              Know More
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: 40,
          backgroundColor: "#b8a373",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.mediaStyle}
        >
          <Grid item>
            <Typography
              variant="h3"
              style={{ color: "#2b1100" }}
              align="center"
            >
              Keyman Insurance
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              style={{ color: "#2b1100" }}
              align="center"
            >
              Insurance against loss of KEY PERSON
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={keymanHandler}>
              Know More
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: 40,
          backgroundColor: "#7897b5",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.mediaStyle}
        >
          <Grid item>
            <Typography variant="h3" style={{ color: "#fff" }} align="center">
              General Insurance
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" style={{ color: "#fff" }} align="center">
              Everything Counts. Everything Matters
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={giHandler}>
              Know More
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: 40,
          backgroundColor: "#f3d9b6",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.mediaStyle}
        >
          <Grid item>
            <Typography
              variant="h3"
              style={{ color: "#493838" }}
              align="center"
            >
              Term Insurance
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              style={{ color: "#493838" }}
              align="center"
            >
              Live a Long Life with Protection
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={termHandler}>
              Know More
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          padding: 40,
          backgroundColor: "#343434",
        }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.mediaStyle}
        >
          <Grid item>
            <Typography variant="h3" style={{ color: "#fff" }} align="center">
              Healthy Insurance
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" style={{ color: "#fff" }} align="center">
              Your Health. Your Choice
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="default" onClick={healthHandler}>
              Know More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Swiper>
  );
};

export default ShowcaseRes;
