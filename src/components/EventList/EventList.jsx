import React from 'react';

import './styles.scss';

import EventDetail from './../EventDetail';

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      showDetails: false,
      event: {}
    };
  }

  handleDetails = (event) => {
    this.setState({
      showDetails: true,
      event
    });
  }

  handleCloseDetails = () => {
    this.setState({ showDetails: false });
  }

  render() {
    const { showDetails } = this.state.showDetails;

    const events = this.state.events.map(event =>
      (
        <li key={event.id}>
          <div className="event-item box">
            <div>{event.summary}</div>
            <button className="icon has-text-success icon-position" onClick={this.handleDetails.bind(this, event)} >
              <i className="fa fa-lg fa-info-circle" />
            </button>
          </div>
        </li>
      ));

    return (
      <React.Fragment>
        <section className="events-container">
          <span className="title"> Events: </span>
          <ul className="event-list">
            {events}
          </ul>
        </section>
        { showDetails ? <EventDetail event={this.state.event} handleClose={this.handleCloseDetails} /> : '' }
      </React.Fragment>
    );
  }
}

export default EventList;
