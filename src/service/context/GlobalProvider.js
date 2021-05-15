import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { GlobalReducer } from './GlobalReducer';
import GlobalContext from './GlobalContext';

const initialStateAPI = {
  events: [],
  countForLevel: {
    error: 0,
    warning: 0,
    info: 0,
  },
  filters: {
    date: '',
    level: [],
    origin: '',
  },
  order: {
    direction: 'ASC',
    pageNumber: 0,
    pageSize: 5,
    sortBy: ''
  },
  totalPages: 1,
};

export default function GlobalProvider({ children }) {
  const [APIState, dispatch] = useReducer(GlobalReducer, initialStateAPI);
  return (
    <GlobalContext.Provider value={{ dispatch, APIState }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.shape(PropTypes.element.isRequired).isRequired,
};
