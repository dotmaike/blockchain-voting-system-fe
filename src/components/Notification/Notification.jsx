import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Notification = (props) => {
  const close = () => {
    props.toogleActive();
  };
  return (
    <React.Fragment>
      <div className={`columns snackbar ${props.isActive ? 'active' : ''}`}>
        <div className="column">
          <div className={`notification ${props.isSuccess ? 'is-success' : 'is-danger'}`}>
            <button className="delete" onClick={close} />
            {props.message}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Notification.propTypes = {
  isActive: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  toogleActive: PropTypes.func.isRequired
};

export default Notification;
