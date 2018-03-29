import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import EventDetail from './../EventDetail';
import EventCreate from './../EventCreate';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      showAddEvent: false,
      eventData: {}
    };
  }

  handleDetails = (e) => {
    const item = this.props.events.filter(i => i.id === Number(e.currentTarget.id));
    this.setState({
      showDetails: true,
      eventData: item
    });
  };

  handleAddEvent = () => {
    this.setState({ showAddEvent: true });
  };

  handleCloseDetails = () => {
    this.setState({ showDetails: false });
  };

  handleCloseAddEvent = (events) => {
    this.setState({ showAddEvent: false });
    this.props.updateEventList(events);
  };

  render() {
    const events = this.props.events.map((event, index) => (
      <li key={index}>
        <div className="event-item box" id={event.id} onClick={this.handleDetails}>
          <div>{event.summary}</div>
          <div className="icon has-text-success icon-position">
            <i className="fa fa-lg fa-info-circle" />
          </div>
        </div>
      </li>
    ));
    return (
      <React.Fragment>
        <section className="events-container">
          <div className="event-panel">
            <div className="list-title">Events: </div>
            <div className="has-text-success add-button" onClick={this.handleAddEvent}>
              <i className="fa fa-3x fa-plus-circle" />
            </div>
          </div>
          <ul className="event-list">{events}</ul>
        </section>
        {this.state.showDetails && <EventDetail event={this.state.eventData} handleClose={this.handleCloseDetails} />}
        {this.state.showAddEvent && (
          <EventCreate
            handleClose={this.handleCloseAddEvent}
            uuid={this.props.uuid}
            showNotification={this.props.showNotification}
          />
        )}
      </React.Fragment>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  uuid: PropTypes.string.isRequired,
  updateEventList: PropTypes.func.isRequired,
  showNotification: PropTypes.func.isRequired
};

export default EventList;
