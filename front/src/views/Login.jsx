import React, { useCallback, useState } from 'react';
import { userDataValidation, APIRouts, localStorageP, fetchApi } from '../service';
import { Loading, Message } from '../components';
import { useHistory } from "react-router-dom";

const validation = ({ email, password }) => (
  userDataValidation.email(email) && userDataValidation.password(password)
);

export default function Login() {
  const INITIAL_STATE = { email: "", password: "", isLoading: false, errorUser: false }
  const [state, setState] = useState(INITIAL_STATE);
  const history = useHistory();
  const { email, password } = state;

  const handleState = useCallback(({ target: { value, id } }) => {
    setState((s) => ({ ...s, [id]: value }));
  }, []);
  
  const loginUser = () => {
    setState((s) => ({ ...s, isLoading: true }));

    fetchApi(APIRouts.GETTOKEN(email, password))
    .then(({ data }) => {
      localStorageP.setStorage('token', data);
      setState((s) => ({ ...s, isLoading: false, errorUser: !s.errorUser }));
      history.push('/dashboard');
    })
    .catch((error) => {
      setState((s) => ({ ...s, isLoading: false, errorUser: !s.errorUser }));
      console.log(error);
    });
  }

  return (
    state.isLoading
      ? <Loading />
      : (
        <div>
          { state.errorUser && <Message message="Dados inválidos!" className="error" /> }
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
            disabled={ !validation({ email, password }) }
            onClick={ loginUser }
          >
            Entrar
          </button>
        </div>
      )
  );
}
