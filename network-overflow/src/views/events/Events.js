import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "./../../shared/card-template/card";
import Navbar from "../dashboard/components/navbar";
import Create from "./../../shared/components/CreateDialog/CreateEventDialog";
import image1 from "./../home/loggo.png";
import image2 from "./../home/imagee.jpg";
import CitySelect from "../dashboard/components/locationSearch";

const events = [
  {
    title: "PHS Class of 2010 Reunion",
    date: "Saturday, June 20",
    description:
      "We are planning a reunion fo the greatest graduating class to ever grace the halls of PHS.",
    venue: "111 N 6th St, Ponchatoula, LA",
    image: image1,
  },
  {
    title: "Quest For Success Training",
    date: "April 2, 2020",
    description:
      "QFS is an innovative new high school level career exploration course designed to prepare all LA graduates.",
    venue: "795 S Morrison Blvd, Hammond, LA",
    image: image1,
  },
  {
    title: "Unlimited By Justin Paul Abraham",
    date: "March 2, 2020",
    description:
      "Discover unlimited, new creation realities (Kainos) in Christ with Justin Paul Abraham.",
    venue: "Northshore 3699, Hammond, LA",
    image: image2,
  },
  {
    title: "THE LOUISIANA BAYOU KING FEST",
    date: "March 26, 2020",
    description:
      "Enjoy 4 days of non-stop entertainment! Watch 6 World class Elvis Tribute Artist recreate 9 Full Elvis Concerts",
    venue: "West 23rd Avenue, Hammond, LA",
    image: image2,
  },
  {
    title: "Abbey Youth Festival 2020",
    date: "March 21, 2020",
    description:
      "You have a purpose in the world. You may not know your purpose. God does. Let Him illuminate you! Come to Abbey Youth Festival 2020",
    venue: "75376 River Road, Hammond, LA",
    image: image1,
  },
  {
    title: "SELU Red day",
    date: "March 14, 2020",
    description:
      "All reed instruments and levels welcome! Featuring Matthew Hess of Saxocentric, Melissa Morales, clarinet with Potomac Winds.",
    venue: "548 Western Avenue, Hammond, LA",
    image: image2,
  },
  {
    title: "HR: Disciplinary Processes",
    date: "April 14, 2020",
    description:
      "Come to this workshop with a few ideas about what you need help with, so that you can participate in some role playing.",
    venue: "1514 Martens Drive, Hammond, LA",
    image: image1,
  },
  {
    title: "SELU ACM Hackathon",
    date: "March 27, 2020",
    description:
      "The Southeastern Louisiana University ACM Chapter is hosting a 24-hour hackathon at Southeastern Louisiana University.",
    venue: "500 West University Avenue, Hammond, LA",
    image: image2,
  },
  {
    title: "Fall Tones",
    date: "October 19, 2020",
    description:
      "In this lesson you will learn all the newest trends for fall 2020 from our expert teachers and helpers.",
    venue: "303 Edin Neil Way, Hammond, LA",
    image: image1,
  },
  {
    title: "Fall Spectrum Deep",
    date: "October 23, 2020",
    description:
      "This lesson will explain the unique features and benefits of Full Spectrum Deep and when, why and who to use it on.",
    venue: "303 Edin Neil Way, Hammond, LA",
    image: image2,
  },
  {
    title: "Cowboys Dance ",
    date: "April 4, 2020",
    description:
      "Come join us Saturday, April 4,2020 for the Mother/ Son Dance at Ponchatoula Recreation Event Building.",
    venue: "303 Edin Neil Way, Hammond, LA",
    image: image1,
  },
  {
    title: "Coloring All Directions",
    date: "October 29, 2020",
    description:
      "In this class you will learn the guidelines of what density, effect, and direction to place your weaves.",
    venue: "19030 Ponchatoula Parks Drive, Ponchatoula LA",
    image: image2,
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    direction: "row",
    alignItems: "center",
    justify: "flex-start",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    paddingLeft: 10,
  },
}));

const Events = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Navbar />
      <div>
        <CitySelect />
        <Container maxWidth="lg">
          <h2> Events Around You</h2>
          <Create />
          <br />
          <Grid container className={useStyles.gridContainer} spacing={2}>
            {events.map((event) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Card event={event} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Events;
