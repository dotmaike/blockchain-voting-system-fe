import React from 'react';
import Proptypes from 'prop-types';

class EventBreadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: this.props.events };
  }

  render() {
    const events = this.state.events.map((event, index) => <li key={index}><div>{event}</div></li>);
    return (
      <nav className="breadcrumb has-succeeds-separator is-centered" aria-label="breadcrumbs">
        <ul>
          {events}
        </ul>
      </nav>
    );
  }
}

EventBreadcrumb.propTypes = {
  events: Proptypes.array.isRequired
};

export default EventBreadcrumb;
