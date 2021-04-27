import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import image1 from "../../assets/pexels-pixabay-414171.jpg";
import image2 from "../../assets/pexels-martin-damboldt-814499.jpg";
import image3 from "../../assets/pexels-pixabay-147411.jpg";
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

  return (
    <Swiper {...params}>
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
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className={classes.buttonStyle}>
          <Button variant="contained" color="default" onClick={nriHandler}>
            Know More
          </Button>
        </div>
      </div>
    </Swiper>
  );
};

export default Showcase;
