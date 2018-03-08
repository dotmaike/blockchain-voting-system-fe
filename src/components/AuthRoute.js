import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from './../Utils/FakeAuth';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      ))
    }
  />
);

export default AuthRoute;
