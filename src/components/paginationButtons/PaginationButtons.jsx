import React, { useContext } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import GlobalContext from '../../service/context/GlobalContext';
import { actionType } from '../../service/context/GlobalReducer';

import './paginationButtons.css';

export default function PaginationButtons() {
  const { APIState: { totalPages  }, dispatch } = useContext(GlobalContext);

  const pages = Array.from({ length: totalPages + 1}, (_, index) => index);
  
  const setPage = ({ target: { value }}) => {
    dispatch({ type: actionType.REQUEST_PAGE, payload: { pageNumber: value, pageSize: 5 }})
  }

  return (
    <div className="pagination-buttons-container">
      <ButtonGroup className="mr-2" aria-label="First group">
        {
          pages.map((pageNumber, index) => (
            <Button key={index} onClick={setPage} value={pageNumber} >{ pageNumber + 1}</Button>
          ))
        }
      </ButtonGroup>
    </div>
  )
}
