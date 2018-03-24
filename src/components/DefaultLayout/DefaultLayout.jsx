import React, { Fragment } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

import Header from './../Header';
import SideBar from './../SideBar';
import Footer from './../Footer';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (sessionStorage.getItem('userInfo') && Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length ? (
        <Fragment>
          <Header />
          <div className="columns">
            <SideBar />
            <Component {...props} />
          </div>
          <Footer />
        </Fragment>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      ))
    }
  />
);

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  component: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(DefaultLayout);
