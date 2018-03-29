import React from 'react';
import Proptypes from 'prop-types';

const EventBreadcrumb = (props) => {
  const events = props.events.slice(Math.max(props.events.length - 5, 0)).map((event, index) => (
    <li key={index}>
      <a href={`#${event.id}`}>{event.summary}</a>
    </li>
  ));
  return (
    <nav className="breadcrumb has-succeeds-separator is-centered" aria-label="breadcrumbs">
      <ul>{events}</ul>
    </nav>
  );
};

EventBreadcrumb.propTypes = {
  events: Proptypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

export default EventBreadcrumb;
