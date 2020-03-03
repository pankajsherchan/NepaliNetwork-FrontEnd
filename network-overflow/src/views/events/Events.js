import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from './../../shared/card-template/card';
import Navbar from './../home/navbar';
import Create from './../../shared/components/CreateDialog/CreateEventDialog';
import image1 from './../home/job.jpg';
import image2 from './../home/room.jpg';

const events = [
  {
    title: 'PHS Class of 2010 Reunion',
    date: 'Saturday, June 20',
    description:
      'We are planning a reunion fo the greatest graduating class to ever grace the halls of PHS.',
    venue: '111 N 6th St, Ponchatoula, LA',
    image: image1
  },
  {
    title: 'Quest For Success Training',
    date: 'April 2, 2020',
    description:
      'QFS is an innovative new high school level career exploration course designed to prepare all LA graduates.',
    venue: '795 S Morrison Blvd, Hammond, LA',
    image: image2
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  gridContainer: {
    direction: 'row',
    alignItems: 'center',
    justify: 'flex-start'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  card: {
    paddingLeft: 10
  }
}));

const Events = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth='lg'>
        <h2> Events Around You</h2>
        <Create />
        <br />
        <Grid container className={useStyles.gridContainer} spacing={2}>
          {events.map(event => {
            return (
              <Grid item xs={12} sm={6} md={3} lg>
                <Card event={event} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Events;
