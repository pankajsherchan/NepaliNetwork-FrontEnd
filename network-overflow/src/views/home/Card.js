import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import room from './room.jpg';
import event from './event.jpg';
import job from './job.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    border: '3px solid #eeeeee',
    minWidth: 275,
    maxWidth: 345,
    color: 'gray',
    marginLeft: 60,
    marginBottom: 60
  },
  imgDiv: {
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  h1Font: {
    color: 'gray'
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12
  }
});
const navbarList = {
  display: 'inline-flex',
  listStyleType: 'none'
};
const menuList = {
  marginLeft: '20px',
  fontWeight: '500'
};
const CardComponent = () => {
  const classes = useStyles();
  const [cardInfo, addInfo] = useState([
    {
      title: 'Rooms',
      description:
        'We understand that living with someone can be intriguing.Our teams will do our best to find the perfect roommate where you can feel home.',
      img: room
    },
    {
      title: 'Events',
      description:
        'New place, New adventure. Find out what is happening around you. There is always something going on that will make you feel home.',
      img: event
    },
    {
      title: 'Jobs',
      description:
        'We Help Each Other ! Thousands of jobs offered by your own locals',
      img: job
    }
  ]);
  return (
    <React.Fragment>
      {' '}
      {cardInfo.map(c => (
        <Card className={classes.root} variant='outlined'>
          <CardContent>
            <Typography variant='h5' component='h2' className={classes.imgDiv}>
              {c.title}{' '}
            </Typography>
            <div className={classes.imgDiv}>
              <img src={c.img} width='200px' height='200px' />
            </div>
            <br />
            <Typography variant='body2' component='p'>
              {c.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary' variant='contained'>
              <Link to='/events'>Explore More</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </React.Fragment>
  );
};

export default CardComponent;
