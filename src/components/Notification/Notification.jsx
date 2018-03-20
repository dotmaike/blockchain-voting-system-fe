import React from 'react';
import './styles.scss';

const Notification = props => (
  <React.Fragment>
    <div className={`columns snackbar ${props.isActive ? 'active' : ''}`}>
      <div className="column">
        <div className="notification is-success">Nullam gravida purus diam, et dictum felis venenatis efficitur.</div>
      </div>
    </div>
  </React.Fragment>
);

export default Notification;
