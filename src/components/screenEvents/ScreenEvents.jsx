import React, { useContext, useState, useEffect, useCallback } from 'react';
import { GlobalContext, filterDataValidation } from '../../service';
import OrderBar from './OrderBar';
import './screenEvent.css';

export default function ScreenEvents() {
  const { APIState: { events, filters } } = useContext(GlobalContext);
  const [eventList, setList] = useState([]);

  const filterEvents = useCallback(() => {
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
  }, [filters, events]);

  useEffect(() => {
    filterEvents();
  }, [filterEvents]);

  return (
    <table>
      <OrderBar />
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
  );
}
