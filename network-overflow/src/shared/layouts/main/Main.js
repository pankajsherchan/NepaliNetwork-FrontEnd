import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import React, { useState } from 'react';
import { SideBar, TopBar } from '../components';

const useStyles = makeStyles(theme => ({
  root: {
    // paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      // paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  }
}));

const Main = props => {
  const classes = useStyles();
  const theme = useTheme();

  const { children } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <TopBar
        onSideBarOpen={handleSidebarOpen}
        shouldOpenSideBar={shouldOpenSidebar}
      />
      <SideBar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {' '}
        {children}
        {/* // TODO: Need a footer here */}
      </main>
    </div>
  );
};

export default Main;
