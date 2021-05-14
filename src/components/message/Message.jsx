import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import './message.css';

export default function Message({ message, variant }) {
  return (
    <Alert variant={variant} className="message">
      {message}
    </Alert>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
