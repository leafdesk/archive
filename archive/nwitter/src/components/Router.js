import React from 'react';
import Home from '../routes/Home';
import Auth from '../routes/Auth';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <>
      <Router>
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path='/'>
                <Home />
              </Route>
            </>
          ) : (
            <Route exact path='/'>
              <Auth />
            </Route>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
