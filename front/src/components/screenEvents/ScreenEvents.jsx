import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext, actionType, filterDataValidation } from '../../service';
import './screenEvent.css';

export default function ScreenEvents() {
  const { APIState: { events, filters }, dispatch } = useContext(GlobalContext);
  const [eventList, setList] = useState([]);

  const sort = ({ target: { id } }) => {
    dispatch({ type: actionType.SORT_EVENTS, payload: id });
  };

  const filterEvents = () => {
    setList(events);
    if (filters.date) {
      setList((state) => filterDataValidation.date(filters.date, state));
    }
    if (filters.level.length) {
      setList((state) => filterDataValidation.level(filters.level, state));
    }
    if (filters.origin) {
      setList((state) => filterDataValidation.origin(filters.origin, state));
    }
  };

  useEffect(() => {
    filterEvents();
  }, [filters, events]);

  return (
    <div className="eventsContainer">
      <table>
        <thead>
          <tr className="eventsSorter">
            <th><button id="level" type="button" onClick={sort}>Tipo</button></th>
            <th><button id="description" type="button" onClick={sort}>Descrição</button></th>
            <th><button id="origin" type="button" onClick={sort}>Origem</button></th>
            <th><button id="eventDate" type="button" onClick={sort}>Data</button></th>
          </tr>
        </thead>
        <tbody>
          {
            eventList.map((event) => (
              <tr key={event.id} className={`${event.level}Event eventContainer`}>
                <td>{event.level}</td>
                <td>{event.description}</td>
                <td>{event.origin}</td>
                <td>{event.eventDate}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
