import React, { useContext } from 'react';
import { GlobalContext, actionType } from '../../service';
import { removeDuplicatOf } from '../../utils';

const action = {
  date: (value) => ({ type: actionType.FILTER_DATE, payload: value }),
  level: (value) => ({ type: actionType.FILTER_LEVEL, payload: value }),
  origin: (value) => ({ type: actionType.FILTER_ORIGIN, payload: value }),
};

export default function Filters() {
  const { APIState: { events }, dispatch } = useContext(GlobalContext);
  const origins = removeDuplicatOf(events.map(({ origin }) => origin));

  return (
    <div>
      <label htmlFor="date">
        Data
        <input type="date" onChange={(e) => dispatch(action.date(e.target.value))} />
      </label>

      <div
        onChange={(e) => dispatch(action.level(e.target.id))}
      >
        <label htmlFor="info">
          <input type="checkbox" value="level" id="info" />
          Info
        </label>
        <label htmlFor="error">
          <input type="checkbox" value="level" id="error" />
          Error
        </label>
        <label htmlFor="warning">
          <input type="checkbox" value="level" id="warning" />
          Warning
        </label>
      </div>

      <select onChange={(e) => dispatch(action.origin(e.target.value))} id="origin">
        <option></option>
        {
          origins.map((origin) => (
            <option key={origin} value={origin}>{origin}</option>
          ))
        }
      </select>
    </div>
  );
}
