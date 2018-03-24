import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo:
        sessionStorage.getItem('userInfo') && Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length
          ? JSON.parse(sessionStorage.getItem('userInfo'))
          : {}
    };
  }
  onLogout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    this.props.history.push('/login');
  };
  render() {
    if (!sessionStorage.getItem('userInfo') && Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length) {
      return <Redirect to={{ pathname: '/login' }} />;
    }
    return (
      <nav className="navbar has-shadow">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/home">
              <p>
                {sessionStorage.getItem('userInfo') &&
                  Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length &&
                  `Welcome ${this.state.userInfo.username} !`}
              </p>
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
                <span className="name">
                  {sessionStorage.getItem('userInfo') &&
                    Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length &&
                    this.state.userInfo.username}
                </span>
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
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Header);
