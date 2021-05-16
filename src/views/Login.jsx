import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIRouts, fetchApi } from '../service';
import { Loading, LoginForm, Message } from '../components';
import { localStorageP } from '../utils';

import './css/login.css';

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
        setTimeout(() => handleState({ loginError: false }), 4000);
      });
  };

  if (state.loggedIn) return <Redirect to="/dashboard" />;

  return (
    <>
    {state.loginError && <Message message="Dados inválidos!" variant="warning" />}
    <div className="login-container">
      {
      state.isLoading
        ? <Loading animation="border" variant="primary" />
        : <LoginForm submit={submit} />
      }
    </div>
    <h3>Pigable Jonson</h3>
    </>
  );
}
