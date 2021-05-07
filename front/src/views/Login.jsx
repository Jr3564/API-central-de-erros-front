import React, { useCallback, useState } from 'react';
import { userDataValidation, APIRouts, localStorageP, fetchApi } from '../service';
import { Loading, Message } from '../components';
import './login.css';
import { useHistory } from 'react-router-dom';

const validation = ({ email, password }) =>
  userDataValidation.email(email) && userDataValidation.password(password);

export default function Login() {
  const INITIAL_STATE = { email: '', password: '', isLoading: false, errorUser: false };
  const [state, setState] = useState(INITIAL_STATE);
  const history = useHistory();
  const { email, password } = state;

  const handleState = useCallback(({ target: { value, id } }) => {
    setState(s => ({ ...s, [id]: value }));
  }, []);

  const loginUser = () => {
    setState(s => ({ ...s, isLoading: true }));

    fetchApi(APIRouts.GETTOKEN(email, password))
      .then(({ data }) => {
        localStorageP.setStorage('token', data);
        setState(s => ({ ...s, isLoading: false, errorUser: !s.errorUser }));
        history.push('/dashboard');
      })
      .catch(error => {
        setState(s => ({ ...s, isLoading: false, errorUser: !s.errorUser }));
        console.log(error);
      });
  };

  return state.isLoading ? (
    <Loading />
  ) : (
    <div className='text-center body'>
      <div className='form-signin'>
        <form>
          <h1 className='h3 mb-3 fw-normal'>Login</h1>
          {state.errorUser && <Message message='Dados inválidos!' className='error' />}
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              onChange={handleState}
              placeholder='name@example.com'
            />
            <label htmlFor='email'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              onChange={handleState}
              id='password'
              placeholder='Password'
            />
            <label htmlFor='password'>Password</label>
          </div>
          <button
            className='w-100 btn btn-lg btn-primary'
            type='submit'
            disabled={!validation({ email, password })}
            onClick={loginUser}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
