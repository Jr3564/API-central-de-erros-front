import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { GlobalReducer } from './GlobalReducer';
import GlobalContext from './GlobalContext';

const initialState = {};

export default function GlobalProvider({ children }) {
  const [GlobalState, dispatch] = useReducer(GlobalReducer, initialState);
  
  return (
    <GlobalContext.Provider value={ { dispatch, GlobalState } }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.shape(PropTypes.element.isRequired).isRequired,
};
