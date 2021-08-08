import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import logo from "../../assets/InsureLeaguehd-rmbg.png";
import { Box, IconButton, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles({
  root: {
    paddingTop: "1rem",
    height: "5.25rem",
    transition: "all 0.5s ease-in-out",
  },
  triggeredroot: {
    height: "4.875rem",
    transition: "all 0.5s ease-in-out",
  },
  toolbarStyle: {
    height: "100%",
  },
  logoStyle: {
    width: "2.5rem",
  },
  drawerLogoStyle: {
    width: "2.5rem",
    paddingTop: "2.5rem",
  },
  buttonTextStyle: {
    padding: "0 .5rem",
  },
  list: {
    width: 200,
  },
  logoTextStyle: {
    fontFamily: "Krona One, sans-serif",
    color: "#4CAF50",
  },
  logoTextStylemob: {
    fontFamily: "Krona One, sans-serif",
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    paddingLeft: "3rem",
    color: "#4CAF50",
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
  const history = useHistory();
  const [variant, setVariant] = useState("outlined");
  const [drawerState, setDrawerState] = React.useState(false);

  const handlehover = () => {
    setVariant("contained");
  };
  const handlehoverLeave = () => {
    setVariant("outlined");
  };

  const handleLogoClick = () => {
    history.push("/");
  };

  const aboutClickHandler = () => {
    history.push("/about");
  };

  //Responsive zone

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };

  const blogClickHandler = () => {
    history.push("/blog");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.root} color="inherit">
          <Toolbar className={classes.toolbarStyle}>
            <Box component={Grid} container justify="center">
              <Box
                component={Grid}
                item
                display={{ xs: "none", sm: "flex" }}
                md={7}
                sm={10}
                container
                spacing={2}
                alignItems="center"
              >
                <Box component={Grid} item>
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <IconButton onClick={handleLogoClick}>
                      <img
                        src={logo}
                        alt="logo"
                        className={classes.logoStyle}
                      />
                    </IconButton>
                  </Link>
                </Box>
                <Box component={Grid} item>
                  <Typography variant="h6" color="initial">
                    {"|"}
                  </Typography>
                </Box>
                <Box component={Grid} item>
                  <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button variant="text" color="default">
                      <Typography
                        variant="subtitle2"
                        color="initial"
                        className={classes.logoTextStyle}
                      >
                        InsureLeague
                      </Typography>
                    </Button>
                  </Link>
                </Box>
                <Box component={Grid} item>
                  <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button variant="text" color="default">
                      <Typography variant="subtitle2" color="initial">
                        Team
                      </Typography>
                    </Button>
                  </Link>
                </Box>
                <Box component={Grid} item>
                  <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button variant="text" color="default">
                      <Typography variant="subtitle2" color="initial">
                        Contact
                      </Typography>
                    </Button>
                  </Link>
                </Box>
                <Button variant="text" color="primary">
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    className={classes.buttonTextStyle}
                    onClick={blogClickHandler}
                  >
                    Newsroom
                  </Typography>
                </Button>
              </Box>
              <Box
                component={Grid}
                display={{ xs: "none", sm: "flex" }}
                item
                md={2}
                sm={2}
                container
                alignItems="center"
                justify="flex-end"
              >
                <Box component={Grid} item>
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
                      onClick={aboutClickHandler}
                    >
                      About us
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <Box
                component={Grid}
                item
                container
                display={{ xs: "flex", sm: "none" }}
                justify="center"
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  color="initial"
                  className={classes.logoTextStylemob}
                >
                  InsureLeague
                </Typography>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerState}
                  onClose={toggleDrawer(false)}
                >
                  <div
                    className={clsx(classes.list)}
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <List>
                      <ListItem>
                        <img
                          src={logo}
                          alt="logo"
                          className={classes.drawerLogoStyle}
                        />
                      </ListItem>

                      <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <ListItem button>
                          <ListItemText>
                            <Typography
                              variant="h6"
                              color="initial"
                              className={classes.logoTextStyle}
                            >
                              InsureLeague
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Link>
                      <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <ListItem button>
                          <ListItemText>
                            <Typography variant="h6" color="initial">
                              Team
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Link>
                      <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <ListItem button>
                          <ListItemText>
                            <Typography variant="h6" color="initial">
                              Contact
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      </Link>
                      <ListItem button onClick={blogClickHandler}>
                        <ListItemText>
                          <Typography variant="h6" color="initial">
                            Newsroom
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem button onClick={aboutClickHandler}>
                        <ListItemText>
                          <Typography variant="h6" color="initial">
                            About us
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </List>
                  </div>
                </Drawer>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
