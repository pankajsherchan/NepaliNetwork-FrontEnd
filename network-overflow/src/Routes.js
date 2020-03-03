import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Dashboard from './views/dashboard';
import Events from './views/events';
import Home from './views/home';
import Jobs from './views/jobs';
import Playground from './views/playground';
import Roommates from './views/roommates';
import SignIn from './views/signin';
import SignUp from './views/signup';
import Card from './shared/card-template/card';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/card' exact>
          <Card />
        </Route>

        <Route path='/signup' exact>
          <SignUp />
        </Route>

        <Route path='/signin' exact>
          <SignIn />
        </Route>

        <Route path='/home' exact>
          <Home />
        </Route>

        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>

        <Route path='/events' exact>
          <Events />
        </Route>

        <Route path='/jobs' exact>
          <Jobs />
        </Route>

        <Route path='/roommates' exact>
          <Roommates />
        </Route>

        <Route path='/playground' exact>
          <Playground />
        </Route>

        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  );
};

export default Routes;
