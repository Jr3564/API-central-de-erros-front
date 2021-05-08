import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  userDataValidation, APIRouts, localStorageP, fetchApi,
} from '../service';
import { Loading, Message } from '../components';

const validation = ({ email, password }) => (
  userDataValidation.email(email) && userDataValidation.password(password)
);

const INITIAL_STATE = {
  email: '', password: '', isLoading: false, errorUser: false,
};

export default function Login() {
  const [state, setState] = useState(INITIAL_STATE);
  const history = useHistory();
  const { email, password } = state;

  const handleState = useCallback(({ target: { value, id } }) => {
    setState((lastState) => ({ ...lastState, [id]: value }));
  }, []);

  const loginUser = () => {
    setState((lastState) => ({ ...lastState, isLoading: true }));

    fetchApi.get(APIRouts.GETTOKEN(email, password))
      .then(({ data }) => {
        localStorageP.setStorage('token', data);
        setState((lastState) => (
          { ...lastState, isLoading: false, errorUser: !lastState.errorUser }
        ));
        history.push('/dashboard');
      })
      .catch(() => {
        setState((lastState) => (
          { ...lastState, isLoading: false, errorUser: !lastState.errorUser }
        ));
      });
  };

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
              onChange={handleState}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              onChange={handleState}
            />
          </label>
          <button
            data-testid="signin-btn"
            type="submit"
            disabled={!validation({ email, password })}
            onClick={loginUser}
          >
            Entrar
          </button>
        </div>
      )
  );
}
