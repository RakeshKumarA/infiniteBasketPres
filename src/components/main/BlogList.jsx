import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import base from "../../base";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    paddingTop: "5rem",
  },
  cardContainers: {
    minHeight: "20vh",
  },
  parent: {
    height: "20vh",
    display: "grid",
    placeItems: "center",
  },
  externalLink: {
    textDecoration: "none",
    color: "black",
  },
});

const BlogList = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    base("blogs")
      .select({ sort: [{ field: "SerialNumber", direction: "desc" }] })
      .eachPage((record, fetchNextPage) => {
        setData(record);
        fetchNextPage();
      });
  }, []);

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item container md={9} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h4" color="initial">
            Latest News
          </Typography>
        </Grid>
        <Grid
          item
          container
          className={classes.container}
          justify="center"
          alignItems="center"
          spacing={1}
        >
          {data.map((row) => {
            return (
              <Grid item xs={10} md={6} lg={4} key={row.fields.SerialNumber}>
                <Card className={classes.cardContainers}>
                  <div className={classes.parent}>
                    <a
                      href={row.fields.Link}
                      target="blank"
                      rel="noopener noreferrer"
                      className={classes.externalLink}
                    >
                      <Typography
                        variant="body1"
                        color="initial"
                        align="center"
                        style={{ padding: "0 1rem" }}
                      >
                        {row.fields.Text}
                      </Typography>
                    </a>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BlogList;
