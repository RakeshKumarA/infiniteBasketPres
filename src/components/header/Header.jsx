import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import logo from '../../assets/InsureLeaguehd-rmbg.png';
import { IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '6.25rem',
    transition: 'all 0.5s ease-in-out',
  },
  triggeredroot: {
    height: '4.875rem',
    transition: 'all 0.5s ease-in-out',
  },
  toolbarStyle: {
    height: '100%',
  },
  logoStyle: {
    width: '2.5rem',
  },
  buttonTextStyle: {
    padding: '0 .5rem',
  },
});

function ElevationScroll(props) {
  const classes = useStyles();
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 40,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger ? classes.triggeredroot : classes.root,
  });
}

const Header = (props) => {
  const classes = useStyles();
  const [variant, setVariant] = useState('outlined');

  const handlehover = () => {
    setVariant('contained');
  };
  const handlehoverLeave = () => {
    setVariant('outlined');
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.root} color="inherit">
          <Toolbar className={classes.toolbarStyle}>
            <Grid container justify="center">
              <Grid
                item
                md={8}
                sm={9}
                container
                spacing={2}
                alignItems="center"
              >
                <Grid item>
                  <IconButton>
                    <img src={logo} alt="logo" className={classes.logoStyle} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button variant="text" color="default">
                    <Typography variant="subtitle2" color="initial">
                      Home
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" color="default">
                    <Typography variant="subtitle2" color="initial">
                      Services
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" color="default">
                    <Typography variant="subtitle2" color="initial">
                      Review
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" color="default">
                    <Typography variant="subtitle2" color="initial">
                      Team
                    </Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" color="default">
                    <Typography variant="subtitle2" color="initial">
                      Contact
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid
                item
                md={1}
                container
                alignItems="center"
                justify="flex-end"
              >
                <Grid item>
                  <Button
                    variant={variant}
                    color="primary"
                    onMouseOver={handlehover}
                    onMouseLeave={handlehoverLeave}
                  >
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.buttonTextStyle}
                    >
                      About us
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
