import React, { useContext } from 'react';
import { actionType, GlobalContext } from '../../service';

import './orderBar.css';

export default function OrderBar() {
  const { dispatch } = useContext(GlobalContext);

  const orderBy = ({ target: { value }}) => {
    dispatch({ type: actionType.ORDER_EVENTS, payload: value });
    dispatch({ type: actionType.SHOW_MORE_EVENTS, payload: 5 });
  };

  return (
    <thead className="eventsOrder">
      <tr >
        <th>
            <button value="level" type="button" onClick={ orderBy }>
              Tipo
            </button>
        </th>
        <th>
            <button value="description" type="button" onClick={ orderBy }>
              Descrição
            </button>
        </th>
        <th>
            <button value="origin" type="button" onClick={ orderBy }>
              Origem
            </button>
        </th>
        <th>
            <button value="eventDate" type="button" onClick={ orderBy }>
              Data
            </button>
        </th>
      </tr>
    </thead>
  )
}

