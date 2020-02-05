import React, { Component, useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import pic1 from "./Team Uncaught Error (1).jpg";
import pic2 from "./Team Uncaught Error (2).jpg";
import pic3 from "./Team Uncaught Error (3).jpg";
import pic4 from "./Team Uncaught Error (4).jpg";
import pic5 from "./Team Uncaught Error (5).jpg";
import logo from "./logoNetwork.png";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

const Title = {};
const rightNavbar = {
  alignSelf: "right",
  marginRight: "20px",
  marginTop: "-w0px"
};
const leftNavbar = {
  marginTop: "-w0px"
};
const bigFont = {
  width: "35px",
  height: "35px"
};
const containerHeading = {
  display: "flex" /* or inline-flex */,
  flexDirection: "row",
  width: "100%",
  justifyContent: "center"
};
const container = {
  display: "flex" /* or inline-flex */,
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between"
};
const navbarList = {
  display: "inline-flex",
  listStyleType: "none"
};
const menuList = {
  marginLeft: "20px",
  fontWeight: "Bold"
};
const Home = () => {
  const [menu, addMenu] = useState(["Home", "About Us", "Contact Us"]);
  return (
    <div>
      <div style={containerHeading}>
        <div style={Title}>
          <img
            style={{ width: "200px", height: "100px", border: "none" }}
            src={logo}
          />
        </div>
      </div>

      <div style={container}>
        <div style={leftNavbar}>
          <ul style={navbarList}>
            {menu.map(m => (
              <li style={menuList} key={m}>
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div style={rightNavbar}>
          <PersonIcon style={bigFont} />
        </div>
      </div>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          interval={3000}
          length={5}
          fade
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img className="d-block w-100" src={pic1} alt="First slide" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselCaption>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginBottom: "100px" }}
              >
                GET STARTED{" "}
              </Button>
            </MDBCarouselCaption>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img className="d-block w-100" src={pic2} alt="Second slide" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img className="d-block w-100" src={pic3} alt="Third slide" />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img className="d-block w-100" src={pic4} alt="Third slide" />
              </MDBView>
            </MDBCarouselItem>{" "}
            <MDBCarouselItem itemId="5">
              <MDBView>
                <img className="d-block w-100" src={pic5} alt="Third slide" />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
      <Button variant="contained" color="primary">
        Initial Preview By Uncaught Error
      </Button>
    </div>
  );
};

export default Home;
