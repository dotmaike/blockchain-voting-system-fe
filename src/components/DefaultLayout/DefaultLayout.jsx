import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './styles.css';

import Header from './../Header';
import SideBar from './../SideBar';
import Footer from './../Footer';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <Header />
        <div className="columns">
          <SideBar />
          <Component {...matchProps} />
        </div>
        <Footer />
      </Fragment>
    )}
  />
);

export default DefaultLayout;
