import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from './../../Utils/FakeAuth';

const Header = withRouter(({ history }) => {
  const signOut = (e) => {
    e.preventDefault();
    fakeAuth.signout(() => history.push('/'));
  };
  return (
    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <p>Welcome !</p>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="/">
              <span className="icon">
                <i className="fa fa-share-alt" />
              </span>
              <span className="name">Share</span>
            </a>

            <a className="navbar-item" href="/">
              <span className="icon">
                <i className="fa fa-user-circle" />
              </span>
              <span className="name">Username</span>
            </a>

            <a className="navbar-item" href="/" onClick={signOut}>
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
});

export default Header;
