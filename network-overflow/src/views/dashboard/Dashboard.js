import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { SideBar, TopBar } from '../../shared/layouts';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  marginLeft: {
    marginLeft: theme.spacing(10)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid xs={3} className={classes.marginLeft}></Grid>

      <TopBar />

      <Grid container spacing={3} xs={12}>
        {/* <Grid item xs={3} sm={3}>
          <TopBar />
        </Grid> */}

        <Grid item xs={9} sm={9}>
          <SideBar
            onClose={() => {}}
            open={true}
            variant={true ? 'persistent' : 'temporary'}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
