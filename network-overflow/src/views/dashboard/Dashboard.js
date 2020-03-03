import React, { Component, useState } from "react";
import MultiItemCarousel from "./components/MultiItemCarousel";
import { makeStyles } from "@material-ui/core/styles";
import HomePageNavbar from "../dashboard/components/navbar";

const profileBasedEvents = [
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  }
];
const profileBasedRooms = [
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  }
];
const topEvents = [
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  }
];
const topRooms = [
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals"
  }
];
const useStyles = makeStyles({
  cardContainer: {
    display: "flex" /* or inline-flex */,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  header: {
    color: "gray",
    fontFamily: "Trocchi",
    fontSize: "35px",
    fontWeight: "normal",
    lineHeight: "48px"
  }
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <HomePageNavbar />
      <span className={classes.header}> Based on your Profile</span>
      <h3 className={classes.header}>Rooms</h3>
      <MultiItemCarousel cardInfo={profileBasedRooms} />
      <h3 className={classes.header}>Events</h3>
      <MultiItemCarousel cardInfo={profileBasedEvents} />
      <span className={classes.header}> Most Saved Topics </span>
      <h3 className={classes.header}>Rooms</h3>
      <MultiItemCarousel cardInfo={topEvents} />

      <h3 className={classes.header}>Events</h3>
      <MultiItemCarousel cardInfo={topRooms} />
    </div>
  );

};

export default Dashboard;
