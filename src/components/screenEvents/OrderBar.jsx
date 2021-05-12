import React, { useContext } from 'react';
import { actionType, GlobalContext } from '../../service';

export default function OrderBar() {
  const { dispatch } = useContext(GlobalContext);

  const orderBy = ({ target: { value }}) => {
    dispatch({ type: actionType.ORDER_EVENTS, payload: value });
    dispatch({ type: actionType.CHANGE_DIRECTION_OF_EVENTS });
  };

  return (
    <thead>
      <tr className="eventsSorter">
        <th>
          <button value="level" type="button" onClick={ orderBy }>Tipo</button>
        </th>
        <th>
          <button value="description" type="button" onClick={ orderBy }>Descrição</button>
        </th>
        <th>
          <button value="origin" type="button" onClick={ orderBy }>Origem</button>
        </th>
        <th>
          <button value="eventDate" type="button" onClick={ orderBy }>Data</button>
        </th>
      </tr>
    </thead>
  )
}

