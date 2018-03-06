import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthButton from './../Authbutton';
import Login from './../Login';
import Dashboard from './../Dashboard';
import PrivateRoute from './../PrivateRoute';

const App = () => (
  <Router>
    <div>
      <AuthButton />
      <Route path="/" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default App;
