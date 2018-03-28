import React from 'react';

import './styles.scss';

import EventDetail from './../EventDetail';
import EventCreate from './../EventCreate';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      showDetails: false,
      showAddEvent: false,
      eventData: {}
    };
  }

  handleDetails = (event) => {
    this.setState({
      showDetails: true,
      eventData: event
    });
  }

  handleAddEvent = () => {
    this.setState({ showAddEvent: true });
  }

  handleCloseDetails = () => {
    this.setState({ showDetails: false });
  }

  handleCloseAddEvent = () => {
    this.setState({ showAddEvent: false });
  }

  render() {
    const events = this.state.events.map((event, index) =>
      (
        <li key={index}>
          <div className="event-item box">
            <div>{event.summary}</div>
            <div className="icon has-text-success icon-position" onClick={this.handleDetails.bind(this, event)} >
              <i className="fa fa-lg fa-info-circle" />
            </div>
          </div>
        </li>
      ));

    return (
      <React.Fragment>
        <section className="events-container">
          <div className="event-panel">
            <div className="list-title"> Events: </div>
            <div className="has-text-success add-button" onClick={this.handleAddEvent} >
              <i className="fa fa-3x fa-plus-circle" />
            </div>
          </div>
          <ul className="event-list">
            {events}
          </ul>
        </section>
        { this.state.showDetails ? <EventDetail event={this.state.eventData} handleClose={this.handleCloseDetails} /> : '' }
        { this.state.showAddEvent ? <EventCreate handleClose={this.handleCloseAddEvent} /> : '' }
      </React.Fragment>
    );
  }
}

export default EventList;
