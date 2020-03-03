import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import event from "./event.jpg";

const useStyles = makeStyles({
  root: {
    border: "3px solid #eeeeee",
    minWidth: 275,
    color: "gray",
    marginLeft: 100,
    marginBottom: 60,
    transition: "all .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)"
    }
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
    color: "gray"
  },
  title: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  },
  icon: {
    marginRight: "auto"
  }
});
const navbarList = {
  display: "inline-flex",
  listStyleType: "none"
};

const CardComponent = props => {
  console.log(props);
  const classes = useStyles();
  const [cardInfo, addInfo] = useState([
    {
      title: "Rooms",
      description:
        "We understand that living with someone can be intriguing.Our teams will do our best to find the perfect roommate where you can feel home.",
      img: event
    }
  ]);
  return (
    <React.Fragment>
      {" "}
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.imgDiv}>
            {props.title}{" "}
          </Typography>
          <div className={classes.imgDiv}>
            <img
              src={require("./yourImage.jpg")}
              width="200px"
              height="200px"
            />
          </div>
          <br />
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" variant="contained">
            Explore More
          </Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default CardComponent;
