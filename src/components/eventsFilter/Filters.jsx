import React, { useContext } from 'react';
import { GlobalContext, actionType } from '../../service';
import { removeDuplicatOf } from '../../utils';

import './filtersStyles.css'

const action = {
  date: (value) => ({ type: actionType.FILTER_DATE, payload: value }),
  level: (value) => ({ type: actionType.FILTER_LEVEL, payload: value }),
  origin: (value) => ({ type: actionType.FILTER_ORIGIN, payload: value }),
};

export default function Filters() {
  const { APIState: { events, filters }, dispatch } = useContext(GlobalContext);
  const origins = removeDuplicatOf(events.map(({ origin }) => origin));

  const clear = () => {
    dispatch({ type: actionType.CLEAR_FILTERS });
  }
  
  return (
    <div className="filters-container">
      <label htmlFor="date">
        Data
        <input type="date" onChange={(e) => dispatch(action.date(e.target.value))} />
      </label>

      <div>
        <label htmlFor="info">
          <input
            type="checkbox"
            value="level"
            id="info"
            checked={filters.level.includes('info')}
            onChange={() => dispatch(action.level('info'))}
          />
          Info
        </label>
        <label htmlFor="error">
          <input
            type="checkbox"
            value="level"
            id="error"
            checked={filters.level.includes('error')}
            onChange={() => dispatch(action.level('error'))}
          />
          Error
        </label>
        <label htmlFor="warning">
          <input
            type="checkbox"
            value="level"
            id="warning"
            checked={filters.level.includes('warning')}
            onChange={() => dispatch(action.level('warning'))}
          />
          Warning
        </label>
      </div>

      <select onChange={(e) => dispatch(action.origin(e.target.value))} id="origin">
        <option> </option>
        {
          origins.map((origin) => (
            <option key={origin} value={origin}>{origin}</option>
          ))
        }
      </select>
      <button type="button" onClick={ clear }>Limpar Filtros</button>
    </div>
  );
}
