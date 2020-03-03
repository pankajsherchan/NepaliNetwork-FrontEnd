import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logoNetwork.png";
import PersonIcon from "@material-ui/icons/Person";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const bigFont = {
  fontWeight: "500",
  width: "35px",
  height: "35px",
  marginRight: "30px"
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },

  socialMedia: {
    display: "inline-flex",
    listStyleType: "none",
    textAlign: "center",
    padding: 0
  },
  quickLinks: {
    marginLeft: "20px",
    fontWeight: "500",
    display: "inline-flex",
    listStyleType: "none",
    textAlign: "center",
    padding: 0
  },
  menuList: {
    marginLeft: 39,
    marginRight: 30
  }
}));

export default function HomePageNavBar() {
  const classes = useStyles();
  const [menu, addMenu] = useState([
    { title: "About Us", link: "" },
    { title: "FAQ", link: "" },
    { title: "Our Team", link: "" },
    { title: "Privacy Policy", link: "" }
  ]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
           <img
            style={{
              width: "200px",
              height: "100px",
              border: "none",
              marginLeft: "30px"
            }}
            src={logo}       
          />
          
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <ul className={classes.quickLinks}>
            {menu.map(m => (
              <li className={classes.menuList}>{m.title}</li>
            ))}
          </ul>
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <div>
            <Link to="/signin">
              {" "}
              <PersonIcon style={bigFont} />
            </Link>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}></div>
    </React.Fragment>
  );
}
