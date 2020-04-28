import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "../../shared/card-template/RCard";
import Navbar from "../dashboard/components/navbar";
import Create from "./../../shared/components/CreateDialog/CreateRoommateDialog";
import image1 from "./../home/room.jpg";
import image2 from "./../home/list1.jpg";
import image3 from "./../home/list2.jpg";
import CitySelect from "../dashboard/components/locationSearch";
const roommates = [
  {
    title: "Double Bed Room",
    location: "111 N 6th St, Ponchatoula, LA",
    description:
      "I am looking for a roommate in a nice double bed room with separate restrooms and laundry facility available.",
    image: image1,
  },
  {
    title: "Single Bed Apartment",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "I am looking to rent out my studio apartment in a wonderful location but no pets are allowed",
    image: image3,
  },
  {
    title: "Triple Bed Apartment",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "We are students at southeastern currently staying in a wonderful 3 bedroom apartment.",
    image: image2,
  },
  {
    title: "Single Bed Apartment",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "I am looking to rent out my studio apartment in a wonderful location but no pets are allowed",
    image: image3,
  },
  {
    title: "Double Bed Room",
    location: "111 N 6th St, Ponchatoula, LA",
    description:
      "I am looking for a roommate in a nice double bed room with separate restrooms and laundry facility available.",
    image: image2,
  },
  {
    title: "Single Bed Apartment",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "I am looking to rent out my studio apartment in a wonderful location but no pets are allowed",
    image: image1,
  },
  {
    title: "Studio Apartment",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "I am looking to rent out my studio apartment in a wonderful location but no pets are allowed",
    image: image3,
  },
  {
    title: "Suite",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "We are students at southeastern currently staying in a wonderful 3 bedroom apartment.",
    image: image2,
  },
  {
    title: "Two Floored Two Bedroom Apartment",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "We are students at southeastern currently staying in a wonderful 3 bedroom apartment.",
    image: image1,
  },
  {
    title: "Three Bedroom Hall Kitchen Apartment",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "We are students at southeastern currently staying in a wonderful 3 bedroom apartment.",
    image: image3,
  },
  {
    title: "Single Bed Studio Apartment",
    location: "795 S Morrison Blvd, Hammond, LA",
    description:
      "I am looking to rent out my studio apartment in a wonderful location but no pets are allowed",
    image: image1,
  },
  {
    title: "Double Bed Room Apartment",
    location: "111 N 6th St, Ponchatoula, LA",
    description:
      "I am looking for a roommate in a nice double bed room with separate restrooms and laundry facility available.",
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

const Roommates = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Navbar />
      <div>
        <CitySelect />

        <Container maxWidth="lg">
          <h2> Room Listings Around You</h2>
          <Create />
          <br />
          <Grid container className={useStyles.gridContainer} spacing={2}>
            {roommates.map((roommate) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <Card roommate={roommate} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Roommates;
