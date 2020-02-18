import React, { Component, useState } from "react";
import "./carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import pic1 from "./Team Uncaught Error (1).jpg";
import pic2 from "./Team Uncaught Error (2).jpg";
import pic3 from "./Team Uncaught Error (3).jpg";
import pic4 from "./Team Uncaught Error (4).jpg";
import pic5 from "./Team Uncaught Error (5).jpg";
import pic6 from "./Team Uncaught Error (6).png";

import logo from "./logoNetwork.png";
import room from "./room.jpg";
import event from "./event.jpg";
import job from "./job.jpg";
import { red } from "@material-ui/core/colors";

const CarouselComponent = () => {
  const [slideImg, addSlides] = useState([pic1, pic2, pic3, pic4, pic6, pic5]);

  const [cardInfo, addInfo] = useState([
    {
      title: "Rooms",
      description:
        "We understand that living with someone can be intriguing.Our teams will do our best to find the perfect roommate where you can feel home.",
      img: room
    },
    {
      title: "Events",
      description:
        "New place, New adventure. Find out what is happening around you. There is always something going on that will make you feel home.",
      img: event
    },
    {
      title: "Jobs",
      description:
        "We Help Each Other ! Thousands of jobs offered by your own locals",
      img: job
    }
  ]);
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      centerMode={true}
      centerSlidePercentage={100}
      showStatus={false}
      showThumbs={false}
    >
      {slideImg.map(s => (
        <div>
          <img src={s} />
          <div className="legend">
            {/* <Button variant="contained" color="secondary">
              Get Started
            </Button>{" "} */}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
