import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';

import Login from './../Login';
import SignUp from './../SignUp';
import DefaultLayout from './../DefaultLayout';
import Home from './../Home';
import Register from './../Register';
import Movements from './../Movements';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <DefaultLayout exact path="/home" component={Home} />
      <DefaultLayout exact path="/register" component={Register} />
      <DefaultLayout exact path="/movements" component={Movements} />
      <Route path="*" exact render={() => <div>Page not found</div>} />
    </Switch>
  </BrowserRouter>
);

export default App;
