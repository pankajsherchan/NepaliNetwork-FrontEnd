import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import logo from "./logoNetwork.png";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      NetworkOverflow-
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    width: "100%",
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  },
  socialMedia: {
    display: "inline-flex",
    listStyleType: "none",
    textAlign: "center",
    padding: 0
  },
  quickLinks: {
    listStyleType: "none",
    padding: 0
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.root}>
        <div>
          <img
            style={{ width: "200px", height: "100px", border: "none" }}
            src={logo}
          />
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul className={classes.quickLinks}>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Our Team</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul className={classes.quickLinks}>
            <li>Address : 1206 Hooks Drive, Hammond LA</li>
            <li>Phone : 985-XXX-XXXX</li>
            <li>Email : info@NetworkOverflow.com </li>
          </ul>
        </div>

        <div>
          <h5>Follow us on</h5>
          <ul class={classes.socialMedia}>
            <li class={classes.socialMediaList}>
              <a href="https://www.google.com" target="_blank">
                <FacebookIcon />{" "}
              </a>
            </li>
            <li class={classes.socialMediaList}>
              <a href="https://www.google.com" target="_blank">
                <TwitterIcon />{" "}
              </a>
            </li>
            <li class={classes.socialMediaList}>
              <a href="https://www.google.com" target="_blank">
                <InstagramIcon />{" "}
              </a>
            </li>
            <li class={classes.socialMediaList}>
              <a href="https://www.google.com" target="_blank">
                <LinkedInIcon />{" "}
              </a>
            </li>
          </ul>{" "}
        </div>
        <div className={classes.socialMedia}></div>
      </Container>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Copyright />
      </div>
    </footer>
  );
}
