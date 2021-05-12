import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './screenCounterStyle.css';
import { GlobalContext } from '../../service';

export default function ScreenCounter({ level }) {
  const { APIState: { countForLevel } } = useContext(GlobalContext);
  return (
    <div className={`${level}Class`}>
      <h1>{countForLevel[level]}</h1>
    </div>
  );
}

ScreenCounter.propTypes = {
  level: PropTypes.string.isRequired,
};
