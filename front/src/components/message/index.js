import React from 'react';
import PropTypes from 'prop-types';

export default function Message({ message, className }) {
  return (
    <span className={ className }>{message}</span>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
