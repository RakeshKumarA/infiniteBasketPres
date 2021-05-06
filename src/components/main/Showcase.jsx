import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import image1 from "../../assets/keymanInsurance_home.png";
import image2 from "../../assets/termPlans_home.png";
import image3 from "../../assets/nriInvestment_home_final.png";
import image4 from "../../assets/generalInsurance.jpg";
import image5 from "../../assets/hniRetirement.jpg";
import image6 from "../../assets/healthInsurance.jpg";
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
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buttonStyle: {
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
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={nriHandler}>
            NRI Insurance
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image5})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={hniHandler}>
            HNI Retirement
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={keymanHandler}>
            Keyman Insurance
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image4})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={giHandler}>
            General Insurance
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={termHandler}>
            Term Plans
          </Button>
        </div>
      </div>
      <div
        className={classes.mediaStyle}
        style={{ backgroundImage: `url(${image6})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={healthHandler}>
            Health Insurance
          </Button>
        </div>
      </div>
    </Swiper>
  );
};

export default Showcase;
