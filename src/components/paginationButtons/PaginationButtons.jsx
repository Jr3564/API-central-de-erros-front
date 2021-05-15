import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

import './paginationButtons.css';

export default function PaginationButtons() {
  return (
    <div className="pagination-buttons-container">
      <ButtonGroup className="mr-2" aria-label="First group">
        <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
      </ButtonGroup>
    </div>
  )
}
