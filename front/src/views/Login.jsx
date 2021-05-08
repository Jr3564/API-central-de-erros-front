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
        <div className="text-center body">
          <div className="form-signin">
            <form>
              <h1 className="h3 mb-3 fw-normal">Login</h1>
              {state.errorUser && <Message message="Dados inválidos!" className="error" />}
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={handleState}
                  placeholder="name@example.com"
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  onChange={handleState}
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                disabled={!validation({ email, password })}
                onClick={loginUser}
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      )
  );
}
