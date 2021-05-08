import React, { useContext } from 'react';
import { GlobalContext, actionType } from '../../service';
import './screenEvent.css';

export default function ScreenEvents() {
  const { APIState: { events }, dispatch } = useContext(GlobalContext);

  const sort = ({ target: { id } }) => {
    dispatch({ type: actionType, payload: id });
  };

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
            events.map((event) => (
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
