import React, { useContext } from 'react';
import { actionType, GlobalContext } from '../../service';

import './showMoreButton.css'

export default function ShowMoreButton() {
  const { dispatch } = useContext(GlobalContext);

  const showMore = () => {
    // dispatch({ type: actionType.NEXT_PAGE, payload: 1 });
    dispatch({ type: actionType.SHOW_MORE_EVENTS, payload: 1 });
  };

  return (
    <button type="button" onClick={ showMore } id="showMore">Mostar mais</button>
  );
}
