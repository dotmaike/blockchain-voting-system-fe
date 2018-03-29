import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const EventDetail = (props) => {
  const close = () => {
    props.handleClose();
  };
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <header className="modal-card-head">
          <p className="modal-card-title is-uppercase">Asset Tracking Event Detail</p>
        </header>
        <section className="modal-card-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">
                <div>
                  <figure className="image is-square">
                    <img src={`data:image/jpeg;charset=utf-8;base64, ${props.event[0].encodedImage}`} alt="" />
                  </figure>
                </div>
              </div>
              <div className="column is-two-fifths">
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label" htmlFor="event-summary">
                      Summary:
                    </label>
                  </div>
                  <div className="field-body">
                    <div className="field detail-content">
                      <p className="control is-expanded has-icons-left">{props.event[0].summary}</p>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label" htmlFor="event-description">
                      Description:
                    </label>
                  </div>
                  <div className="field-body">
                    <div className="field detail-content">
                      <p className="control is-expanded has-icons-left">{props.event[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={close} />
    </div>
  );
};

EventDetail.propTypes = {
  event: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  handleClose: PropTypes.func.isRequired
};

export default EventDetail;
