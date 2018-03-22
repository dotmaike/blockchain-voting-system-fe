import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getUser } from './../../Utils/API';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { userData: {} };
  }
  componentWillMount() {
    const isAuthenticated = Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length > 0;
    if (isAuthenticated) {
      getUser('testUser', 'password')
        .then(res => this.setState({ userData: res.data }))
        .catch(error => console.error(error));
    }
  }
  onLogout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
  };
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/home">
              <p>{Object.keys(this.state.userData).length > 0 && `Welcome ${this.state.userData.username} !`}</p>
            </a>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="#share">
                <span className="icon">
                  <i className="fa fa-share-alt" />
                </span>
                <span className="name">Share</span>
              </a>

              <a className="navbar-item" href="#username">
                <span className="icon">
                  <i className="fa fa-user-circle" />
                </span>
                <span className="name">Username</span>
              </a>

              <a href="/login" className="navbar-item" onClick={this.onLogout}>
                <span className="icon">
                  <i className="fa fa-sign-out" />
                </span>
                <span className="name">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Header);
