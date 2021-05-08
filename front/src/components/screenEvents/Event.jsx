import React from 'react';
import PropTypes from 'prop-types';

export default function Event({ event }) {
  return (
    <div className={`${event.level}Event eventContainer`}>
      <span>{event.eventDate}</span>
      <span>{event.level}</span>
      <span>{event.origin}</span>
      <span>{event.description}</span>
    </div>
  );
}

Event.propTypes = {
  event: PropTypes.shape({
    eventDate: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
