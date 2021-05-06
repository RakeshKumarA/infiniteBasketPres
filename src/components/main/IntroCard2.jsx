import { Card, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardStyle: {
    minHeight: "80vh",
    minWidth: "30vh",
  },
  titlecontainer: {
    minHeight: "10vh",
    backgroundColor: "rgba(76, 175, 80, 0.3);",
    color: "black",
  },
  hoveredTitleContainer: {
    minHeight: "10vh",
    backgroundColor: "rgba(76, 175, 80);",
    color: "white",
  },
  contentContainer: {
    paddingTop: "5vh",
  },
});

const IntroCard2 = ({ caseTitle, caseContent, caseContent2 }) => {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  const handleCardMouseOver = () => {
    setHovered(true);
  };
  const handleCardMouseOut = () => {
    setHovered(false);
  };
  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          className={classes.cardStyle}
          onMouseOver={handleCardMouseOver}
          onMouseOut={handleCardMouseOut}
          elevation={hovered ? 10 : 0}
        >
          <Grid container direction="column">
            <Grid
              item
              container
              className={
                hovered ? classes.hoveredTitleContainer : classes.titlecontainer
              }
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <Typography variant="h6" align="center">
                  {caseTitle}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              className={classes.contentContainer}
            >
              <Grid item xs={9}>
                <Typography variant="body1" color="initial">
                  {caseContent}
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography variant="body1" color="initial">
                  {caseContent2}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default IntroCard2;
