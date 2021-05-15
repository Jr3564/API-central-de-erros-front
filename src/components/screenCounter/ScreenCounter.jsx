import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './screenCounterStyle.css';
import { actionType, GlobalContext } from '../../service';

export default function ScreenCounter({ level }) {
  const { APIState: { countForLevel }, dispatch } = useContext(GlobalContext);

  const dispatchLevel = (id) => {
    dispatch({ type: actionType.CLEAR_FILTERS });
    dispatch({ type: actionType.SHOW_MORE_EVENTS, payload: 5 });
    dispatch({ type: actionType.FILTER_LEVEL, payload: id });
  }

  return (
    <button
      className={`${level}Class count-type`}
      onClick={ () => dispatchLevel(level) }
    >
      <span>{countForLevel[level]}</span>
    </button>
  );
}

ScreenCounter.propTypes = {
  level: PropTypes.string.isRequired,
};
