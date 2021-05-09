import React, { useContext } from 'react';
import { GlobalContext, actionType } from '../../service';

const removeDuplicates = (array) => array
  .reduce((acc, crr) => (acc.includes(crr) ? acc : [...acc, crr]), []);

const action = {
  date: (value) => ({ type: actionType.SET_FILTER, payload: { date: value } }),
  level: (value) => ({ type: actionType.SET_FILTER, payload: { level: value } }),
  origin: (value) => ({ type: actionType.SET_FILTER, payload: { origin: value } }),
};

export default function Filters() {
  const { APIState: { events }, dispatch } = useContext(GlobalContext);
  const origins = removeDuplicates(events.map(({ origin }) => origin));
  return (
    <div>
      <label htmlFor="date">
        Data
        <input type="date" onChange={({ target: { value } }) => dispatch(action.date(value))} />
      </label>
      <div
        id="level"
        onChange={({ target: { id: value } }) => dispatch(action.level(value))}
      >
        <label htmlFor="info">
          Info
          <input type="checkbox" id="info" />
        </label>
        <label htmlFor="error">
          Error
          <input type="checkbox" id="error" />
        </label>
        <label htmlFor="warning">
          Warning
          <input type="checkbox" id="warning" />
        </label>
      </div>
      <select onChange={({ target: { value } }) => dispatch(action.origin(value))}>
        <option>Origem do evento</option>
        {
            origins.map((origin) => (
              <option key={origin} value={origin}>{origin}</option>
            ))
          }
      </select>
    </div>
  );
}
