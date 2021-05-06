import React, { useCallback, useContext, useState } from 'react';
import { userDataValidation, APIRouts } from '../service';
import { GlobalContext, actionType } from '../service/context';
import axios from 'axios';

const validation = ({ email, password }) => (
  userDataValidation.email(email) && userDataValidation.password(password)
);

export default function Login() {
  const [user, setUser] = useState({});
  const { dispatch } = useContext(GlobalContext);

  const handleState = useCallback(({ target: { value, id } }) => {
    setUser((state) => ({ ...state, [id]: value }));
  }, []);

  console.log(user)
  
  const fetchToken = () => {
    const api = axios.create({
      baseURL: APIRouts.URL,
      auth: {
        username: 'client-id',
        password: 'secret-id',
      },
    });
    dispatch({ type: actionType.SUBMIT_LOGIN });
    api.get(APIRouts.GETTOKEN(user))
    .then(({ data }) => dispatch({ type: actionType.SUCCESS_LOGIN, payload: data }))
    .catch((error) =>  dispatch({ type: actionType.FAIL_LOGIN, payload: error }) );
  }

  return (
    <div>
    <label htmlFor="email">
      Email
      <input
        type="email"
        id="email"
        onChange={ handleState }
      />
    </label>
    <label htmlFor="password">
      Password
      <input
        type="password"
        id="password"
        onChange={ handleState }
      />
    </label>
      <button
        data-testid="signin-btn"
        type="submit"
        disabled={ !validation(user) }
        onClick={ fetchToken }
      >
        Entrar
      </button>
    </div>
  );
}
