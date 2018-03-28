import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class EventCreate extends React.Component {
  close = () => {
    this.props.handleClose();
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <header className="modal-card-head">
            <p className="modal-card-title is-uppercase">Add Event</p>
          </header>
          <section className="modal-card-body">
            <div className="container">
              Aqui forma para registrar Evento
            </div>
          </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.close} />
      </div>
    );
  }
}

EventCreate.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default EventCreate;
