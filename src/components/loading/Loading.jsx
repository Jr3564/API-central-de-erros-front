import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

import './loading.css'

export default function Loading({ animation = "border", variant, className="loading" }) {
  return (
    <Spinner animation={animation} variant={variant} className={className}/>
  );
}

Loading.propTypes = {
  animation: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};
