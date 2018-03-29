import React, { Fragment } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

import Header from './../Header';
import SideBar from './../SideBar';
import Footer from './../Footer';
import Notification from './../Notification';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isSuccess: true,
      message: ''
    };
  }
  showNotification = ({ data, type }) => {
    const getMessage = () => {
      const msg = {
        add: 'Asset was successfully added',
        update: 'Asset was successfully updated'
      };
      if (msg[type]) {
        return msg[type];
      }
      return data.message;
    };
    this.setState({
      isActive: true,
      isSuccess: data.status === 200 || data.status === 201,
      message: getMessage()
    });
    setTimeout(this.toogleActive, 5000);
  };
  toogleActive = () => {
    this.setState({ isActive: false });
  };
  render() {
    const Component = this.props.component;
    return (
      <Route
        render={props =>
          (sessionStorage.getItem('userInfo') && Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length ? (
            <Fragment>
              <Header />
              <div className="columns">
                <SideBar />
                <Component showNotification={this.showNotification} {...this.props} />
              </div>
              <Notification
                isActive={this.state.isActive}
                isSuccess={this.state.isSuccess}
                toogleActive={this.toogleActive}
                message={this.state.message}
              />
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
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  component: PropTypes.any.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(DefaultLayout);
