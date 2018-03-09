import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './../Login';
import SignUp from './../SignUp';
import DefaultLayout from './../DefaultLayout';
import Home from './../Home';
import Register from './../Register';
import Movements from './../Movements';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Login {...props} />} />
      <Route exact path="/signup" component={SignUp} />
      <DefaultLayout exact path="/home" component={Home} />
      <DefaultLayout exact path="/register" component={Register} />
      <DefaultLayout exact path="/movements" component={Movements} />
      <Route path="*" exact render={() => <div>Page not found</div>} />
    </Switch>
  </BrowserRouter>
);

export default App;
