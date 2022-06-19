import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { Fragment } from "react";
import Profile from "../assets/img_hi.jpeg";
import Chip from "@material-ui/core/Chip";

import SubHeader from "./SubHeader";
import Contact from "./Contact";
const useStyles = makeStyles((theme) => ({
  profile_pic: {
    maxWidth: 500,
    height: 400,
    backgroundImage: `url(${Profile})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    margin: "20px",
    // border: "1px solid grey",
  },

  profile_text: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingLeft: "20px",
    overflow: "hidden",
    color: "rgba(80,80,80, 1)",
  },
  title: {
    // fontFamily: ["MarkPro", "sans-serif"],
    fontSize: "18pt",
    fontWeight: "700",
    color: "#3f51b5",
  },

  gridRoot: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: 'dashed',
    // padding: theme.spacing(0),
  },
  // gridBox: {
  //   margin: theme.spacing(0),
  //   backgroundColor: '#e1e1e1',
  // },
  border: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
  stepper: {
    textAlign: "left",
    backgroundColor: "#f5f5f5",
  },
  label: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  stepContent: {
    padding: "15px 0px 0px 20px",
  },
  designation: {
    marginBottom: "10px",
    fontSize: "12pt",
    fontWeight: "700",
    color: "rgba(0, 0, 0, 0.6)",
  },
  designationHover: {
    marginBottom: "10px",
    fontSize: "12pt",
    fontWeight: "700",
    color: "rgb(63,81,181)",
    // color: "rgba(0, 0, 0, 1)",
  },
  desc: {
    fontSize: "12pt",
    color: "rgba(0, 0, 0, 0.6)",
  },
  ul: {
    fontWeight: "normal",
    fontSize: "13pt",
    color: "rgba(80, 80, 80, 1)",
  },
  ulHover: {
    fontWeight: "normal",
    fontSize: "13pt",
    color: "rgba(0, 0, 0, 1)",
  },
  li: {
    margin: "10px 0",
  },
}));

const getWorkEx = () => {
  return [
    {
      comapany: "OLX Group (Naspers and Prosus company)",
      duration: "Since 2017",
      data: [
        {
          designation: "CEO OLX Group India",
          desc:
            "OLX Autos is the leading pre-owned/used cars classifieds and transactions platform in the emerging markets of Asia and Latin America. Our mission is to organise the car buying and selling  process for consumers. As CEO I am responsible for this pan India business and its growth.",
          points: [
            "Acting as CEO of OLX India, for the classifieds and the Autos Online and offline business",
            "Build the online classifieds business P&L with its presence across the 4000+ towns in India",
            "Offline retail business under brand name OLX Autos (earlier cashmycar) with more than 100 retail centres in 20 cities",
            "Integrated Online and Offline businesses with full service bouquet for car buyers/sellers & partners",
          ],
        },
        {
          designation: "Vice President",
          desc: "",
          points: [
            "Built the end to end product allowing the transactions business to scale",
            "Live and operational with 55+ offline Retail centres across the country",
            "Built a team across of 1000+ people across functions (Product, Operations, Sales, HR, Finance etc.) and geographies grounds up",
          ],
        },
      ],
    },
    {
      comapany: "Snapdeal.com",
      duration: "2015 - 2017",
      data: [
        {
          designation: "Head of Fashion Business ",
          desc: "",
          points: [
            "Remodelled the end to end product front end and back end for fashion selling and fulfilment",
            "Building the fashion business for Snapdeal, leading a team of 50+.",
            "Enabling transition from fashion marketplace to branded fashion with brand relationships (120+ Brands launched)",
            "Enable the transition across functions: Product, Warehousing, Inventory management and operations",
            "Have made fashion the fastest growing business unit in Snapdeal (40% by volumes) in last 6 months.",
            "Right sized the fashion team from 150 to 50 to optimise cost as per business size.",
          ],
        },
        {
          designation: "Strategy",
          desc: "",
          points: [
            "Single's day project: Worked with the founders to create processes for all functions for large sale days (10x daily volumes) on the lines of Singles Day (Alibaba) in China - Product & Technology, Sourcing, Operations (Warehousing and Customer care)",
            "Profitability of Electronics business: Large white goods sourcing and delivery processes, Customer credit for high ticket (>70 Euros) purchases. Integrated with Bajaj finserve for zero% EMI on the platform.",
          ],
        },
      ],
    },
    {
      comapany: "Jumia.com (Rocket Internet)",
      duration: "2014 - 2015",
      data: [
        {
          designation:
            "Managing Director (Global COO of a 35 country operation in Asia/Africa/Eastern Europe)",
          desc:
            "Lead a diverse and strong team of ~1000 people (50+ nationalities) spread across 3 continents, 35 countries with 8 direct reports as a CEO for the business:",
          points: [
            "Leading the roll out of central product and process frameworks for sellers using Saleforce.com and building the logistics to help the sellers deliver their orders",
            "P&L's with focus on monetization, investor management and funding allocation (GSV: USD 50Mn/annum)",
            "End to end responsibility of country business, logistics, sellers & customer operations",
          ],
        },
        {
          designation: "",
          desc: "Achievements:",
          points: [
            "Grew 4x on Net revenues in 2015 while reducing burn rate to half; significant improvement in NPS & repurchase rate",
            "Largest e-Commerce player in Pakistan, Bangladesh, Morocco, Algeria (2015)",
            "Pivoted the business model from offline mass sellers to key accounts",
            "Restructured the company: Reduced the overall head count to ~500 & burn rate to ~€500,000",
            "Conceptualized and initiated monetization of business with seller advertisements, fulfilment services for sellers",
          ],
        },
      ],
    },
  ];
};
const getEd = () => {
  return [
    {
      college:
        "Indian Institute of Technology Bombay (IIT) - Bachelor of Technology",
      duration: "2002-2006",
      points: [
        "Ranked 13/64 in class",
        "Ranked 1002 amongst ~175,000 candidates, in the entrance test for the IITs",
      ],
    },
    {
      college:
        "Indian School of Business (ISB) - Master of Business Administration",
      duration: "2009-2010",
      points: [
        "Represented India at the Global Novartis Biocamp-2009",
        "Financial Times global top 30 B-School - CGPA: 3.52/4",
      ],
    },
  ];
};

const Journey = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const workSteps = getWorkEx();
  const edSteps = getEd();

  const onMouseEnterHandler = (id) => (e) => {
    console.log("enter handler", id);
    setActiveStep(id);
  };
  const onMouseLeaveHandler = (id) => (e) => {
    console.log("leave handler", id);
    setActiveStep(0);
  };

  return (
    <div>
      <SubHeader>My Professional Journey</SubHeader>
      <Grid container className={classes.gridRoot}>
        <Grid item xs={12} className={classes.border}></Grid>
        <Grid item sm={7} xs={12} className={classes.profile_text}>
          <Typography variant="h5" className={classes.border}>
            Fast track Global career
          </Typography>
          <Typography variant="h5" className={classes.border}>
            Ex Managing Director - Kaymu (Merged with Jumia - Listed on NYSE)
          </Typography>
          <Typography variant="h5" className={classes.border}>
            Currently CEO OLX Autos India
          </Typography>
          <Chip label="Accomplished at building and leading large teams: 2000+ peopole" />
          <Chip label="Building businesses from scratch to a  USD 500M + P&L " />
          <Chip
            label="E-commerce, Retail, FMCG &
          Automotive domains, Across Asia, Africa & Europe"
          />
        </Grid>
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
          <Contact displayInline />
        </Grid>
      </Grid>

      <Grid container className={classes.gridRoot}>
        <Grid item xs={12} className={classes.border}>
          <SubHeader>Work Experience</SubHeader>
        </Grid>
        <Grid item xs={12} className={classes.border}>
          <Stepper orientation="vertical" className={classes.stepper}>
            {workSteps.map((step, index) => (
              <Step
                key={step.comapany}
                onMouseEnter={onMouseEnterHandler(step.comapany)}
                onMouseLeave={onMouseLeaveHandler(step.comapany)}
              >
                <StepLabel active>
                  <div className={classes.label}>
                    <Typography variant="h6" color="primary">
                      {step.comapany}
                    </Typography>
                    <Typography
                      color="secondary"
                      variant="caption"
                      // style={{ marginRight: "15%",opacity:`${step.comapany === activeStep?1:0.8}` }}
                    >
                      {step.duration}
                    </Typography>
                  </div>
                </StepLabel>
                <StepContent active className={classes.stepContent}>
                  {step.data.map((data, i) => (
                    <Fragment key={data.designation}>
                      <Typography
                        variant="body1"
                        display={"block"}
                        className={
                          step.comapany === activeStep
                            ? classes.designationHover
                            : classes.designation
                        }
                      >
                        {data.designation}
                      </Typography>
                      <Typography
                        variant="body2"
                        display={"block"}
                        className={classes.desc}
                      >
                        {data.desc}
                      </Typography>
                      <ul
                        className={
                          step.comapany === activeStep
                            ? classes.ulHover
                            : classes.ul
                        }
                      >
                        {data.points.map((point) => (
                          <li key={point} className={classes.li}>
                            <Typography variant="body2">{point}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Fragment>
                  ))}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
      <Grid container className={classes.gridRoot}>
        <Grid item xs={12} className={classes.border}>
          <SubHeader>Education</SubHeader>
        </Grid>
        <Grid item xs={12} className={classes.border}>
          <Stepper orientation="vertical" className={classes.stepper}>
            {edSteps.map((step) => (
              <Step
                key={step.college}
                onMouseEnter={onMouseEnterHandler(step.college)}
                onMouseLeave={onMouseLeaveHandler(step.college)}
              >
                <StepLabel active>
                  <div className={classes.label}>
                    <Typography variant="h6" color="primary">
                      {step.college}
                    </Typography>
                    <Typography
                      color="secondary"
                      variant="caption"
                      style={{ marginRight: "15%" }}
                    >
                      {step.duration}
                    </Typography>
                  </div>
                </StepLabel>
                <StepContent active className={classes.stepContent}>
                  <Fragment>
                    <ul
                      className={
                        step.college === activeStep
                          ? classes.ulHover
                          : classes.ul
                      }
                    >
                      {step.points.map((point) => (
                        <li className={classes.li} key={point}>
                          <Typography variant="body2">{point}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Journey;
