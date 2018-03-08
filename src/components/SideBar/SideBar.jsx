import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <aside className="column is-2 aside hero is-fullheight">
    <div>
      <div className="main">

        <NavLink to="/dashboard" className="item" activeClassName="active">
          <span className="icon">
            <i className="fa fa-home" />
          </span>
          <span className="name">Home</span>
        </NavLink>

        <a href="/" className="item">
          <span className="icon">
            <i className="fa fa-star" />
          </span>
          <span className="name">Starred</span>
        </a>
        <a href="/" className="item">
          <span className="icon">
            <i className="fa fa-envelope-o" />
          </span>
          <span className="name">Sent Mail</span>
        </a>
        <a href="/" className="item">
          <span className="icon">
            <i className="fa fa-folder-o" />
          </span>
          <span className="name">Folders</span>
        </a>
      </div>
    </div>
  </aside>
);

export default SideBar;
