import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { GlobalReducer } from './GlobalReducer';
import GlobalContext from './GlobalContext';

const initialState = { errorMessage: '', token: '', isFetching: false };

export default function GlobalProvider({ children }) {
  const [GlobalState, dispatch] = useReducer(GlobalReducer, initialState);

  return (
    <GlobalContext.Provider value={ { dispatch, GlobalState } }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
