import React, { Component, useState } from "react";
import MultiItemCarousel from "./components/MultiItemCarousel";
import { makeStyles } from "@material-ui/core/styles";
import HomePageNavbar from "../dashboard/components/navbar";
import CitySelect from "../dashboard/components/locationSearch";

const profileBasedEvents = [
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
];
const profileBasedRooms = [
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
];
const topEvents = [
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Events",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
];
const topRooms = [
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
  {
    title: "Top Rooms",
    img: "./event.jpg",
    description:
      "We Help Each Other ! Thousands of jobs offered by your own locals",
  },
];
const useStyles = makeStyles({
  cardContainer: {
    display: "flex" /* or inline-flex */,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  header: {
    color: "gray",
    fontFamily: "Trocchi",
    fontSize: "35px",
    fontWeight: "normal",
    lineHeight: "48px",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div
      style={{ width: "100%", textAlign: "left", backgroundColor: "#f2f2f2" }}
    >
      <HomePageNavbar />
      <br></br>
      <div style={{ alignSelf: "center" }}>
        <CitySelect />
      </div>

      <div style={{ textAlign: "center" }}>
        <span className={classes.header}>Based on your Profile</span>
      </div>
      <div style={{ marginLeft: "70px" }}>
        <h3 className={classes.header}>Rooms</h3>
      </div>
      <MultiItemCarousel cardInfo={profileBasedRooms} />
      <div style={{ marginLeft: "70px" }}>
        <h3 className={classes.header}>Events</h3>
      </div>
      <MultiItemCarousel cardInfo={profileBasedEvents} />
      <div style={{ textAlign: "center" }}>
        <span className={classes.header}>Most Saved Topics</span>
      </div>
      <div style={{ marginLeft: "70px" }}>
        <h3 className={classes.header}>Top Rooms</h3>
      </div>
      <MultiItemCarousel cardInfo={topEvents} />
      <div style={{ marginLeft: "70px" }}>
        <h3 className={classes.header}>Top Events</h3>
      </div>
      <MultiItemCarousel cardInfo={topRooms} />
    </div>
  );
};

export default Dashboard;
