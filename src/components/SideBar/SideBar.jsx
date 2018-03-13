import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <aside className="column is-2 aside hero is-fullheight">
    <div className="main">
      <NavLink to="/home" className="item" activeClassName="active">
        <span className="icon">
          <i className="fa fa-home" />
        </span>
        <span className="name">Home</span>
      </NavLink>

      <NavLink to="/register" className="item" activeClassName="active">
        <span className="icon">
          <i className="fa fa-edit" />
        </span>
        <span className="name">Register</span>
      </NavLink>

      <NavLink to="/movements" className="item" activeClassName="active">
        <span className="icon">
          <i className="fa fa-history" />
        </span>
        <span className="name">Movements</span>
      </NavLink>
    </div>
  </aside>
);

export default SideBar;
