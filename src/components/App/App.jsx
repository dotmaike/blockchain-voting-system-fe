import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './../Login';
import Dashboard from './../Dashboard';
import AuthRoute from './../AuthRoute';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Login {...props} />} />
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <Route path="*" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default App;
