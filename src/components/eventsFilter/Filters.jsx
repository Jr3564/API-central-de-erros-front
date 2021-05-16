import React, { useContext } from 'react';
import { GlobalContext, actionType } from '../../service';
import { removeDuplicatOf } from '../../utils';

import './filtersStyles.css'

export default function Filters() {
  const { APIState: { events, filters }, dispatch } = useContext(GlobalContext);
  const origins = removeDuplicatOf(events.map(({ origin }) => origin));

  const clear = () => {
    dispatch({ type: actionType.CLEAR_FILTERS });
  }

  const filter = {
    level: ({ target: { value } }) => {
      dispatch({ type: actionType.FILTER_LEVEL, payload: value })
    },
    
    date: ({ target: { value } }) => {
      dispatch({ type: actionType.FILTER_DATE, payload: value })
    },
  
    origin: ({ target: { value } }) => {
      dispatch({ type: actionType.FILTER_ORIGIN, payload: value })
    }
  }

  return (
    <div className="filters-container">
      <h5>Filtros:</h5>
      <div className="level-container">
        <label htmlFor="info">
          <input
            type="checkbox"
            value="info"
            checked={filters.level.includes('info')}
            onChange={filter.level}
          />
          Info
        </label>
        <label htmlFor="error">
          <input
            type="checkbox"
            value="error"
            checked={filters.level.includes('error')}
            onChange={filter.level}
          />
          Error
        </label>
        <label htmlFor="warning">
          <input
            type="checkbox"
            value="warning"
            checked={filters.level.includes('warning')}
            onChange={filter.level}
          />
          Warning
        </label>
      </div>
      <div className="date-container">
        <input type="date" onChange={filter.date} />
      </div>
      <div className="origin-container">
        <select onChange={filter.origin} id="origin">
          <option>Origem</option>
          {
            origins.map((origin) => (
              <option key={origin} value={origin}>{origin}</option>
            ))
          }
        </select>
      </div>
      <button type="button" onClick={ clear }>Limpar Filtros</button>
    </div>
  );
}
