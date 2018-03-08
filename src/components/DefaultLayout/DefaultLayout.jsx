import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './styles.css';

import fakeAuth from './../../Utils/FakeAuth';

import Header from './../Header';
import SideBar from './../SideBar';
import Footer from './../Footer';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps =>
      (fakeAuth.isAuthenticated ? (
        <Fragment>
          <Header />
          <div className="columns">
            <SideBar />
            <Component {...matchProps} />
          </div>
          <Footer />
        </Fragment>
      ) : (
        <Redirect to={{ pathname: '/' }} />
      ))
    }
  />
);

export default DefaultLayout;
