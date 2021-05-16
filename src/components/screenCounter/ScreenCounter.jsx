import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './screenCounterStyle.css';
import { actionType, GlobalContext } from '../../service';
import { requestEventsByLevel } from '../../service/api';

export default function ScreenCounter({ level }) {
  const { APIState: { countForLevel }, dispatch } = useContext(GlobalContext);

  const dispatchLevel = (lvl) => {
    dispatch({ type: actionType.CLEAR_FILTERS });
    requestEventsByLevel(dispatch, lvl);
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
