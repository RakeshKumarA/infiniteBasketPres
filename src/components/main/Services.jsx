import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, Button } from '@material-ui/core';
import './services.css';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FlightIcon from '@material-ui/icons/Flight';
import StayPrimaryPortraitIcon from '@material-ui/icons/StayPrimaryPortrait';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const useStyles = makeStyles({
  root: {
    height: 600,
  },
  titleStyle: {
    fontWeight: 700,
  },
  cardStyle: {
    padding: '1rem',
    height: '75%',
  },
  iconStyle: {
    fontSize: 64,
  },
  iconStyleonHover: {
    fontSize: 64,
    color: '#4CAF50',
  },
  cardContainerStyle: {
    maxWidth: 350,
    height: 385,
  },
  swiperoutercontainer: {
    height: 400,
  },
  boxStyling: {
    height: '100%',
  },
  learnMoreStyle: {
    width: '100%',
  },
});

const Services = () => {
  const classes = useStyles();
  const history = useHistory();
  const [variant1, setVariant1] = useState('outlined');
  const [variant2, setVariant2] = useState('outlined');
  const [variant3, setVariant3] = useState('outlined');
  const [variant4, setVariant4] = useState('outlined');
  const [variant5, setVariant5] = useState('outlined');

  const handleMouseOver = (id) => {
    switch (id) {
      case 1:
        setVariant1('elevation');
        break;
      case 2:
        setVariant2('elevation');
        break;
      case 3:
        setVariant3('elevation');
        break;
      case 4:
        setVariant4('elevation');
        break;
      case 5:
        setVariant5('elevation');
        break;
      default:
        break;
    }
  };
  const handleMouseLeave = (id) => {
    switch (id) {
      case 1:
        setVariant1('outlined');
        break;
      case 2:
        setVariant2('outlined');
        break;
      case 3:
        setVariant3('outlined');
        break;
      case 4:
        setVariant4('outlined');
        break;
      case 5:
        setVariant5('outlined');
        break;
      default:
        break;
    }
  };

  const params = {
    spaceBetween: 30,
    slidesPerView: 'auto',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  };

  const services = [
    {
      id: 1,
      variant: variant1,
      icon: (
        <VpnKeyIcon
          className={
            variant1 === 'outlined'
              ? classes.iconStyle
              : classes.iconStyleonHover
          }
        />
      ),
      title: 'Key Man Insurance',
      content:
        'Insurance  policy taken out by a business, to compensate that business for financial losses that would arise from the death or extended incapacity of an important member of that business',
    },
    {
      id: 2,
      variant: variant2,
      icon: (
        <CalendarTodayIcon
          className={
            variant2 === 'outlined'
              ? classes.iconStyle
              : classes.iconStyleonHover
          }
        />
      ),
      title: 'Term Plans',
      content:
        'Type of  life insurance  policy that provides coverage for a certain period of time or a specified "term" of years',
    },
    {
      id: 3,
      variant: variant3,
      icon: (
        <FlightIcon
          className={
            variant3 === 'outlined'
              ? classes.iconStyle
              : classes.iconStyleonHover
          }
        />
      ),
      title: 'NRI Insurance Investment Plans',
      content:
        'Allows NRIs to buy any plan that meets their requirements of protecting themselves and their family.',
    },
    {
      id: 4,
      variant: variant4,
      icon: (
        <StayPrimaryPortraitIcon
          className={
            variant4 === 'outlined'
              ? classes.iconStyle
              : classes.iconStyleonHover
          }
        />
      ),
      title: 'Retirement Plans',
      content:
        'Insurance products which help you accumulate savings over a long period of time, providing financial security for your future.',
    },
    {
      id: 5,
      variant: variant5,
      icon: (
        <FavoriteIcon
          className={
            variant5 === 'outlined'
              ? classes.iconStyle
              : classes.iconStyleonHover
          }
        />
      ),
      title: 'Health Insurance',
      content:
        'Type of  insurance  that offers  coverage  to the policy holder for medical  expenses in case of a health emergency',
    },
  ];

  const handleServiceClick = (id) => {
    switch (id) {
      case 1:
        history.push('/keyman');
        break;
      case 2:
        history.push('/termplan');
        break;
      case 3:
        history.push('/nriinsure');
        break;
      case 4:
        history.push('/retire');
        break;
      case 5:
        history.push('/healthinsure');
        break;

      default:
        break;
    }
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item container md={9} sm={10} direction="column" spacing={2}>
        <Grid item>
          <Typography
            variant="h4"
            color="initial"
            className={classes.titleStyle}
          >
            Our Services
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="initial">
            We cater to all kinds of insurance – Life & General Insurance. We
            also do all kinds of loan requirements from NBFCs and Banks.
          </Typography>
        </Grid>
        <Grid item className={classes.swiperoutercontainer}>
          <Swiper {...params}>
            {services.map((service) => (
              <div className={classes.cardContainerStyle} key={service.id}>
                <Card
                  className={classes.cardStyle}
                  variant={service.variant}
                  elevation={10}
                  onMouseOver={() => handleMouseOver(service.id)}
                  onMouseLeave={() => handleMouseLeave(service.id)}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    className={classes.boxStyling}
                  >
                    <Box p={1}>{service.icon}</Box>
                    <Box p={1}>
                      <Typography variant="h5" color="initial">
                        {service.title}
                      </Typography>
                    </Box>
                    <Box flexGrow={1} p={1}>
                      <Typography variant="body2" color="initial">
                        {service.content}
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      className={classes.learnMoreStyle}
                    >
                      <Box>
                        <Button
                          variant="text"
                          color="default"
                          onClick={() => handleServiceClick(service.id)}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </div>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
