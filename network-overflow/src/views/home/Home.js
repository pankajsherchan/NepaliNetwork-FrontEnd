import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "./Carousel";
import Card from "./Card";
import StickyFooter from "./StickyFooter";
import HomePageNavBar from "./navbar";

const useStyles = makeStyles({
  root: {
    border: "3px solid #eeeeee",
    minWidth: 275,
    maxWidth: 345,
    color: "gray",
    marginLeft: 60,
    marginBottom: 60
  },
  cardContainer: {
    display: "flex" /* or inline-flex */,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  imgDiv: {
    textAlign: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  h1Font: {
    color: "gray",
    textAlign: "center"
  },
  title: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <HomePageNavBar />
      <div style={{ paddingTop: "5%" }}>
        <Carousel />
      </div>
      <br></br>
      <div className={classes.h1Font}>
        <h1> We can help you with</h1>
      </div>
      <br></br>
      <div className={classes.cardContainer}>
        <Card />
      </div>
      <Button variant="contained" color="primary">
        Initial Preview By Uncaught Error
      </Button> 
      <StickyFooter />
    </div>
  );
};

export default Home;
