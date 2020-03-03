import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from './../../shared/card-template/card';
import Navbar from './../home/navbar';
import Create from './../../shared/components/CreateDialog/CreateEventDialog';

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
          <Grid item xs={12} sm={6} md={3} lg>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg>
            <Card />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Events;
