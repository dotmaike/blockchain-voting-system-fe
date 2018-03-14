import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar has-shadow">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/home">
          <p>Welcome !</p>
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

          <Link to="/login" className="navbar-item">
            <span className="icon">
              <i className="fa fa-sign-out" />
            </span>
            <span className="name">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
