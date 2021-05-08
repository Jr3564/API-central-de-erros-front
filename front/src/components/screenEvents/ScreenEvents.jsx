import React, { useContext } from 'react';
import { GlobalContext } from '../../service';
import Event from './Event';
import './screenEvent.css';

export default function ScreenEvents() {
  const { APIState: { events } } = useContext(GlobalContext);
  return (
    <div className="eventsContainer">
      <ul>
        {
          events.map((event) => <Event event={event} key={event.id} />)
        }
      </ul>
    </div>
  );
}
