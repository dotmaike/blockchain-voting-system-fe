import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import EventBreadcrumb from './../EventBreadcrumb';
import EventList from './../EventList';

const Transactions = (props) => {
  const updateEventList = (events) => {
    if (events) {
      props.updateEventList(events);
    }
  };
  return (
    <React.Fragment>
      <EventBreadcrumb events={props.data.events} />
      <div className="tile is-ancestor transactions">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child">
            <div className="is-aligner">
              <div className="image is-aligner-item">
                <img src={`data:image/jpeg;charset=utf-8;base64, ${props.data.events[0].encodedImage}`} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">Transactions</p>
            <p>ID: {props.data.uuid}</p>
            <p>Description: {props.data.description}</p>
            <EventList updateEventList={updateEventList} showNotification={props.showNotification} {...props.data} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Transactions.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  showNotification: PropTypes.func.isRequired,
  updateEventList: PropTypes.func.isRequired
};

export default Transactions;
