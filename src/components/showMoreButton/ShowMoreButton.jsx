import React, { useContext } from 'react';
import { actionType, GlobalContext } from '../../service';

export default function ShowMoreButton() {
  const { dispatch } = useContext(GlobalContext);

  const showMore = () => {
    // dispatch({ type: actionType.NEXT_PAGE, payload: });
    dispatch({ type: actionType.SHOW_MORE_EVENTS, payload: 1 });
  };

  return (
    <button type="button" onClick={ showMore }>Mostar mais</button>
  );
}
