import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { userDataValidation } from '../../service';

import './loginForm.css';

const isValid = ({ email, password }) => (
  userDataValidation.email(email) && userDataValidation.password(password)
);

export default function LoginForm({ submit }) {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleState = useCallback(({ target: { value, id } }) => {
    setUser((userState) => (
      { ...userState, [id]: value }
    ));
  }, []);

  return (
    <div className="text-center body">
      <div className="form-signin">
        <form onSubmit={() => submit(user)}>
          <h1 className="h3 mb-3 fw-normal">Login</h1>
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
          <input
            className="btn btn-outline-danger"
            type="submit"
            value="Entrar"
            disabled={!isValid(user)}
          />
        </form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
