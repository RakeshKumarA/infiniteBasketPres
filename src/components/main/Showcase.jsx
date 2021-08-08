import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import image1 from "../../assets/keymanInsurance_final.jpg";
import image2 from "../../assets/termPlans_final.jpg";
import image3 from "../../assets/nriInvestment_final.jpg";
import image4 from "../../assets/generalInsurance_final-min.jpg";
import image5 from "../../assets/hniRetirement_final.jpg";
import image6 from "../../assets/healthInsurance_final.jpg";
import image7 from "../../assets/landing_final.jpg";

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
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-end",
  },
  buttonStyle: {
    paddingLeft: "15rem",
    paddingBottom: "5rem",
  },
});

const Showcase = () => {
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
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image7})` }}
      >
        <div className={classes.buttonStyle} style={{ paddingLeft: "46vw" }}>
          <Button variant="contained" color="default" onClick={aboutHandler}>
            Know More
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={nriHandler}>
            Know More
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image5})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={hniHandler}>
            Know More
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={keymanHandler}>
            Know More
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={giHandler}>
            Know More
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={termHandler}>
            Know More
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image6})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={healthHandler}>
            Know More
          </Button>
        </div>
      </div>
    </Swiper>
  );
};

export default Showcase;
