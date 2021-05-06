import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./services.css";
import arun from "../../assets/Arun-cropped.jpeg";
import indu from "../../assets/Indu-cropped.jpeg";
import jai from "../../assets/Jai-cropped.jpeg";
import Typography from "@material-ui/core/Typography";
import { Avatar, Box, IconButton } from "@material-ui/core";
import Spacer from "react-add-space";

const useStyles = makeStyles({
  root: {
    height: "120vh",
  },
  resprootmdsm: {
    height: "100vh",
    padding: "2rem",
  },
  resprootxs: {
    height: "180vh",
    padding: "2rem",
  },
  titleStyle: {
    fontSize: 36,
    fontWeight: 700,
  },
  resumefontwt: {
    fontWeight: 400,
  },
  namefontwt: {
    fontWeight: 600,
  },
});

const Team = () => {
  const classes = useStyles();
  return (
    <>
      {/* Desktop */}
      <Box
        component={Grid}
        container
        className={classes.root}
        justify="center"
        display={{ xs: "none", md: "none", sm: "none", lg: "flex" }}
      >
        <Grid item container sm={9}>
          <Grid item container direction="column" justify="center" spacing={4}>
            <Grid item>
              <Typography
                variant="h2"
                color="initial"
                className={classes.titleStyle}
              >
                The Team
              </Typography>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    style={{ fontsize: "1.5rem", fontWeight: "600" }}
                  >
                    Jaisimha N S
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={8} />
                </Grid>
                <Grid item>
                  <Avatar alt="Jai" src={jai} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Jaisimha is the Co Promoter & Principal Officer of the
                  company. He started his career as an Executive in Sundaram
                  Finance Ltd. In 2000 he joined UTI Bank as Deputy Manger.
                  During his tenure of 18 years in Axis Bank, he held various
                  leadership positions – Sales Head, Priority and NRI Channel
                  Head, Bancassurance Channel, Circle Trust Head. His last
                  assignment was with Lakshmi Vilas Bank as Branch Banking Head
                  and Regional Head, Karnataka.
                </Typography>
                <Typography variant="h6" color="initial">
                  His expertise includes Business Development, Relationship
                  Management and Customer Service.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    style={{ fontsize: "1.5rem", fontWeight: "600" }}
                  >
                    Indu Ramanujam
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={8} />
                </Grid>
                <Grid item>
                  <Avatar alt="Indu" src={indu} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Indu Ramanujam is the Co Promoter of the Company. She is
                  actively involved in handling business relationships with MSME
                  clients, High Networth Individuals and NRIs. With 4+ years
                  experience as a Insurance advisor, she has gained experience
                  to understand the requirement of clients, advice the customers
                  on the insurance coverage that suit their requirements.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    style={{ fontsize: "1.5rem", fontWeight: "600" }}
                  >
                    Arun Kumar
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={8} />
                </Grid>
                <Grid item>
                  <Avatar alt="Arun" src={arun} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="h6" color="initial">
                  Arun is the Head – New Initiatives. Arun is a triple post
                  graduate, with degrees in Management - IIM Calcutta ,
                  Psychology and Mass Communication. He has an overall
                  experience of 20+ years in various sectors like IT, Insurance
                  and Banking. After passing out from IIM- Calcutta in 2002, he
                  has been involved with several start-up companies in various
                  roles from Business Development to heading a team of news
                  editors. He has worked as an investment and financial
                  consultant over the past decade.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* Ipad */}
      <Box
        component={Grid}
        container
        className={classes.resprootmdsm}
        justify="center"
        display={{ xs: "none", sm: "flex", md: "flex", lg: "none" }}
      >
        <Grid item container sm={9}>
          <Grid item container direction="column" justify="center" spacing={2}>
            <Grid item>
              <Typography
                variant="h2"
                color="initial"
                className={classes.titleStyle}
              >
                The Team
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    className={classes.namefontwt}
                  >
                    Jaisimha NS
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={4} />
                </Grid>
                <Grid item>
                  <Avatar alt="Jai" src={jai} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  className={classes.resumefontwt}
                >
                  Jaisimha is the Co Promoter & Principal Officer of the
                  company. He started his career as an Executive in Sundaram
                  Finance Ltd. In 2000 he joined UTI Bank as Deputy Manger.
                  During his tenure of 18 years in Axis Bank, he held various
                  leadership positions – Sales Head, Priority and NRI Channel
                  Head, Bancassurance Channel, Circle Trust Head. His last
                  assignment was with Lakshmi Vilas Bank as Branch Banking Head
                  and Regional Head, Karnataka.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  className={classes.resumefontwt}
                >
                  His expertise includes Business Development, Relationship
                  Management and Customer Service.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    className={classes.namefontwt}
                  >
                    Indu Ramanujam
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={4} />
                </Grid>
                <Grid item>
                  <Avatar alt="Indu" src={indu} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  className={classes.resumefontwt}
                >
                  Indu Ramanujam is the Co Promoter of the Company. She is
                  actively involved in handling business relationships with MSME
                  clients, High Networth Individuals and NRIs. With 4+ years
                  experience as a Insurance advisor, she has gained experience
                  to understand the requirement of clients, advice the customers
                  on the insurance coverage that suit their requirements.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    className={classes.namefontwt}
                  >
                    Arun Kumar
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={4} />
                </Grid>
                <Grid item>
                  <Avatar alt="Arun" src={arun} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  className={classes.resumefontwt}
                >
                  Arun is the Head – New Initiatives. Arun is a triple post
                  graduate, with degrees in Management - IIM Calcutta ,
                  Psychology and Mass Communication. He has an overall
                  experience of 20+ years in various sectors like IT, Insurance
                  and Banking. After passing out from IIM- Calcutta in 2002, he
                  has been involved with several start-up companies in various
                  roles from Business Development to heading a team of news
                  editors. He has worked as an investment and financial
                  consultant over the past decade.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* iphone */}
      <Box
        component={Grid}
        container
        className={classes.resprootxs}
        justify="center"
        display={{ xs: "flex", sm: "none", md: "none", lg: "none" }}
      >
        <Grid item container sm={9}>
          <Grid
            item
            container
            sm={10}
            direction="column"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Typography
                variant="h2"
                color="initial"
                className={classes.titleStyle}
              >
                The Team
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    className={classes.namefontwt}
                  >
                    Jaisimha NS
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={4} />
                </Grid>
                <Grid item>
                  <Avatar alt="Jai" src={jai} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  className={classes.resumefontwt}
                >
                  Jaisimha is the Co Promoter & Principal Officer of the
                  company. He started his career as an Executive in Sundaram
                  Finance Ltd. In 2000 he joined UTI Bank as Deputy Manger.
                  During his tenure of 18 years in Axis Bank, he held various
                  leadership positions – Sales Head, Priority and NRI Channel
                  Head, Bancassurance Channel, Circle Trust Head. His last
                  assignment was with Lakshmi Vilas Bank as Branch Banking Head
                  and Regional Head, Karnataka.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  className={classes.resumefontwt}
                >
                  His expertise includes Business Development, Relationship
                  Management and Customer Service.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    className={classes.namefontwt}
                  >
                    Indu R
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={4} />
                </Grid>
                <Grid item>
                  <Avatar alt="Indu" src={indu} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  className={classes.resumefontwt}
                >
                  Indu Ramanujam is the Co Promoter of the Company. She is
                  actively involved in handling business relationships with MSME
                  clients, High Networth Individuals and NRIs. With 4+ years
                  experience as a Insurance advisor, she has gained experience
                  to understand the requirement of clients, advice the customers
                  on the insurance coverage that suit their requirements.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item container alignItems="center">
                <Grid item>
                  <Typography
                    variant="h4"
                    color="initial"
                    className={classes.namefontwt}
                  >
                    Arun Kumar
                  </Typography>
                </Grid>
                <Grid item>
                  <Spacer amount={4} />
                </Grid>
                <Grid item>
                  <Avatar alt="Arun" src={arun} />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle2"
                  color="initial"
                  className={classes.resumefontwt}
                >
                  Arun is the Head – New Initiatives. Arun is a triple post
                  graduate, with degrees in Management - IIM Calcutta ,
                  Psychology and Mass Communication. He has an overall
                  experience of 20+ years in various sectors like IT, Insurance
                  and Banking. After passing out from IIM- Calcutta in 2002, he
                  has been involved with several start-up companies in various
                  roles from Business Development to heading a team of news
                  editors. He has worked as an investment and financial
                  consultant over the past decade.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Team;
