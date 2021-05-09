import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIRouts, localStorageP, fetchApi } from '../service';
import { Loading, LoginForm, Message } from '../components';

export default function Login() {
  const [state, setState] = useState({ isLoading: false, loggedIn: false, loginError: false });

  const handleState = (obj) => {
    setState((lastState) => ({ ...lastState, ...obj }));
  };

  const submit = (user) => {
    handleState({ isLoading: true });

    fetchApi.get(APIRouts.GETTOKEN(user.email, user.password))
      .then(({ data }) => {
        localStorageP.setStorage('token', data);
        handleState({ isLoading: false, loggedIn: true });
      })
      .catch(() => {
        handleState({ loginError: true, isLoading: false });
        setTimeout(() => handleState({ loginError: false }), 3000);
      });
  };

  if (state.loggedIn) return <Redirect to="/dashboard" />;

  return (
    <>
      {state.loginError && <Message message="Dados inválidos!" className="error" />}
      {
      state.isLoading
        ? <Loading />
        : <LoginForm submit={submit} />
      }
    </>
  );
}
