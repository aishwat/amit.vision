import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Profile from "../assets/img_hi.jpeg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  grid: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
  },
  profile_pic: {
    maxWidth: 500,
    height: 400,
    backgroundImage: `url(${Profile})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    // margin: "20px",
    // border: "1px solid grey",
  },

  // profile_pic: {
  //   maxWidth: "100%",
  //   width: "450px",
  // },
  profile_text: {
    textAlign: "left",
    margin: "auto",
    // margin: "40px 0px 0px 20px",
    // border: "1px solid red",
  },
  title: {
    marginBottom: "20px",
  },
  border: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
}));

const Intro = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const onMouseEnterHandler = (id) => (e) => {
    console.log("enter handler", id);
    setActiveStep(id);
  };
  const onMouseLeaveHandler = (id) => (e) => {
    console.log("leave handler", id);
    setActiveStep(0);
  };
  
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={6} className={classes.border}>
        <div className={classes.profile_text}>
          <Typography variant="h5" component="h2" color="primary">
            Welcome to Amit Kumar's home page
          </Typography>
          <Typography
            className={classes.title}
            color="secondary"
            gutterBottom
          >
            CEO OLX Group in India
          </Typography>
          <Typography gutterBottom>
            An accomplished business leader who has built
            <ul>
              <li>Across startups (Snapdeal, Rocket Internet) and large organisations (OLX Group and Britannia)</li>
              <li>
                Businesses grounds up in 3 different continents - Asia, Africa and Europe with large P&L's (USD 500M)
              </li>
              <li>Led very large teams (2000+) with 50+ nationalities</li>
            </ul>
          </Typography>

          <Typography gutterBottom>
            An individual
            <ul>
              <li>A Public Speaker, a Startup Mentor & a columnist</li>
              <li>Graduate from Indian institution of Technology, Bombay</li>
              <li>MBA from Indian school of Business, Hyderabad</li>
            </ul>
          </Typography>
        </div>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <img src={Profile} className={classes.profile_pic} />
      </Grid> */}
      <Grid
        item
        sm={5}
        xs={12}
        className={classes.border}
        onMouseEnter={onMouseEnterHandler("profile_pic")}
        onMouseLeave={onMouseLeaveHandler("profile_pic")}
      >
        <Paper
          className={classes.profile_pic}
          elevation={activeStep === "profile_pic" ? 8 : 2}
        />
      </Grid>
    </Grid>
  );
};

export default Intro;
