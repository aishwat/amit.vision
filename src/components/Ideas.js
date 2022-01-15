import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import SubHeader from "./SubHeader";
import { Fragment } from "react";
import Profile from "../assets/img_hi.jpeg";
import I6 from "../assets/i6.jpg";
import I11 from "../assets/i11.jpg";
import I12 from "../assets/i12.jpg";
import I13 from "../assets/i13.jpg";

const iFrameConfig = {
  host: "https://www.youtube-nocookie.com/embed/",
  frameBorder: "0",
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen: "allowfullscreen",
  width: "480",
};

const useStyles = makeStyles({
  // root: {
  //   maxWidth: 450,
  // },
  media: {
    maxWidth: iFrameConfig.width,
    maxHeight: "315px",
    // opacity:"0.8"
  },
  desc: {
    marginTop: "10px",
  },
  border: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
  grid: {
    justifyContent: "space-around",
    marginTop: "50px",
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
  gridItem: {
    marginBottom: "40px",
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
  cardContent: {
    textAlign: "left",
    // backgroundColor: "#e1e1e1",
  },
});

const ideas = [
  {
    id: "i1",
    src: "GKOOjWNMFsE",
    title:
      "Olx Autos: Online-offline Business Merged, Forays Into Pre-owned Auto Segment | Startup Street",
    desc:
      "Sharing an update on Launch of OLX Autos the omni-channel approach by OLX in Used car retail in an interview with CNBC TV18",
  },
  {
    id: "i2",
    src: "IN57aAsL_fU",
    title: "OLX Autos India Exclusive",
    desc:
      "Interview with ET  NOW the recovery of Used car industry and the expectations post the festive season",
  },
  {
    id: "i3",
    src: "cnto71GkDwI",
    title:
      "Challenges & Strategies to Sustain in Business - Linkedpreneur Stories",
    desc:
      "Perspective on building businesses from scratch  and surviving through tough times",
  },
  {
    id: "i4",
    src: "BCRFYbcGi8I",
    title: "Pre-owned Car Business in India, a $ 32Billion opportunity",
    desc:
      "Views on the future of Used Automobile industry and Impact of COVID 19 in long term. ",
  },
  {
    id: "i5",
    src: "8XRBtkTzUjk",
    title: "Rising Significance of GIG Economy-The Way Forward: Webinar",
    desc:
      "GIG economy is our future. COVID 19 has had mixed impact on GIG economy. Speaking at the ASSOCHAM seminar on the rising significance of GIG economy. ",
  },
  {
    id: "i6",
    cover: I6,
    url: "",
    title: "CII conference on eCommerce - Digitization of Trade",
    desc:
      "Digitization of Trade is future of eCommerce in India. Speaking at CII conference on eCommerce, talking about, next wave of eCommerce coming from outside normal B2C businesses.",
  },
  {
    id: "i7",
    cover: Profile,
    url:
      "https://hr.economictimes.indiatimes.com/news/workplace-4-0/recruitment/essential-building-block-for-career-progress-in-post-covid-world/78326514",
    title: "Essential building block for career progress in post-Covid world",
    desc:
      "The post-Covid reality is that the amount of physical and face-to-face interaction that we used to have earlier, is going to come down significantly.",
  },
  {
    id: "i8",
    src: "dUNma-LV6jg",
    title:
      "Amit Kumar's (Business Head OLX Cashmycar) interview on Zee business",
    desc:
      "Interview at Zee news Channel, sharing views on the recovery of Used car industry  in Post covid times.  Encouraging recovery ahead. ",
  },
  {
    id: "i9",
    src: "0KJaX1FgXw4",
    title:
      "Leadership Talk Series at IIML by Head OLX Autos Amit Kumar (Revolution of Marketplace businesses)",
    desc:
      "Amit Kumar Head of OLX Autos India (in.linkedin.com/in/execamit ) joined the IIM Lucknow on 22nd Aug and shared his career journey and enlightened the class on the Revolution of marketplaces. He detailed out the impact of Marketplaces in our lives and their evolution.",
  },
  {
    id: "i10",
    src: "F6fSn3w8z5I",
    title:
      "Amit talking about distribution channels in India and the importance of franchise networks in growth",
    desc:
      "SESSION IX: OPPORTUNITY INDIA – HOW TO BUILD AN EFFICIENT DEALERSHIP AND DISTRIBUTORSHIP NETWORK",
  },
  {
    id: "i11",
    cover: I11,
    url: "https://de.slideshare.net/execamit/olx-auto-note-4",
    title: "OLX Auto note 4",
    desc:
      "The OLX Auto note is an annual report about Preowned/used car industry which is published by OLX group India. This report highlights trends in used car purchase and sell behaviour and the top models.",
  },
  {
    id: "i12",
    cover: I12,
    url:
      "https://www.slideshare.net/execamit/revolution-of-marketplaces-in-our-lives",
    title: "Revolution of Marketplaces in our lives",
    desc:
      "Amit Kumar Head OLX Autos presented to the IIM Lucknow class of 2021. He shared his career journey and spoke about how marketplaces have generated value and evolved.",
  },
  {
    id: "i13",
    cover: I13,
    url:
      "https://www.slideshare.net/execamit/pivot-your-startup-fail-early-fail-fast-learn-fast",
    title:
      "Pivot your startup, Fail early, Fail fast - Learn - Amit Kumar Business leader - Head of OLX Autos",
    desc:
      "Presentation made by Amit Kumar Head of OLX Autos to 3000+ Startup entrepreneurs of I-Hubx Gujarat. This presentation gives a methodology for building a startup and pivoting at appropriate times, while keeping the vision in mind.",
  },
  {
    id: "i14",
    src: "j2zQwgBkSVc",
    title:
      "Video of the live presentation made to 3000+ entrepreneurs from universities of Gujarat state.",
    desc:
      "In the startup runway program of I hub, supported by Gujarat government, Amit Kumar (Business leader and currently  head  of OLX Autos) presented to more than 3000+ university students and budding entrepreneurs  his ideas on building startups, failing early, failing fast.",
  },
  {
    id: "i15",
    src: "tCCfGY2Jba4",
    title: "How to Start Your Ecommerce Startup | Kolkata Ventures",
    desc:
      "In this master class for budding eCommerce entrepreneurs Amit Kumar shares  a step by  step guide to launching your own  business",
  },
  {
    id: "i16",
    src: "7iW7nvZC4C4",
    title:
      "Connaissance Guest Lecture by Amit Kumar (CEO OLX Autos India) to the SCMHRD MBA Class",
    desc:
      "Talking to more than 200 students of SCMHRD class of 2020, Amit shares his perspective on  the evolution of marketplaces.",
  },
   {
    id: "i17",
    src: "GmVw1nQCaMw",
    title:
      "The Economic Times Future Workforce Webinar – Reimagining Workforce Productivity",
    desc:
      "Workforce of future will be driven by entrepreneurialization & will be engaged by democratic ways of working",
  },
   {
    id: "i18",
    src: "9g1a8Fwl3rk",
    title:
      "OLX Auto talk 3.0 - Consumer Automotive Experience in a Contactless & Digital future",
    desc:
      "How is the used car buying and selling experience evolving due to covid and how does the future look?",
  },
  {
    id: "i19",
    src: "C7F_AC2Ii4c",
    title:
      "OLX Autos & Autocar - Are pre-owned cars the new stars?",
    desc:
      "Pre-owned car industry has suddenly become the sun shine sector - why and what does the future hold?",
  },
];

const Ideas = () => {
  const classes = useStyles();
  const cardClickHandler = (idea) => (e) => {
    console.log(idea.title);
    const newWindow = window.open(
      idea.src ? `https://www.youtube.com/watch?v=${idea.src}` : idea.url,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  const [activeCard, setActiveCard] = React.useState(0);
  const onMouseEnterHandler = (i) => (e) => {
    console.log("enter handler", i);
    setActiveCard(i);
  };
  const onMouseLeaveHandler = (i) => (e) => {
    console.log("leave handler", i);
    setActiveCard(0);
  };

  return (
    <Fragment>
      <SubHeader>Sharing is caring</SubHeader>
      <Grid container className={classes.grid}>
        {ideas.map((idea) => (
          <Grid
            key={idea.id}
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.gridItem}
            onMouseEnter={onMouseEnterHandler(idea.id)}
            onMouseLeave={onMouseLeaveHandler(idea.id)}
          >
            <Card
              style={{
                maxWidth: `${iFrameConfig.width}px`,
                marginLeft: "10px",
                marginRight: "10px",
              }}
              elevation={activeCard === idea.id ? 8 : 2}
            >
              <CardActionArea onClick={cardClickHandler(idea)}>
                {idea.src ? (
                  <iframe
                    // width={`${iFrameConfig.width}`}
                    height="315"
                    src={`${iFrameConfig.host}${idea.src}`}
                    title={idea.title}
                    {...iFrameConfig}
                  ></iframe>
                ) : (
                  <CardMedia
                    component="img"
                    alt={idea.title}
                    className={classes.media}
                    image={idea.cover}
                    title={idea.title}
                  />
                )}
              </CardActionArea>
              <CardContent className={classes.cardContent}>
                <CardActionArea onClick={cardClickHandler(idea)}>
                  <Typography variant="h5" component="h2" color="primary">
                    {idea.title}
                  </Typography>
                </CardActionArea>

                <Typography
                  variant={activeCard === idea.id ? "body1" : "body2"}
                  // style={{color: activeCard == idea.id ? "rgba(1,1,1,1)":"rgba(1,1,1,0.5)"}}
                  component="p"
                  className={classes.desc}
                >
                  {idea.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Ideas;
