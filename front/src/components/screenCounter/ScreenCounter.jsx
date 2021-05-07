import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './screenCounterStyle.css';
import { APIRouts, fetchApi, localStorageP } from '../../service';

export default function ScreenCounter({ level }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const { access_token: token } = localStorageP.getStorage('token');

    const body = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    fetchApi.get(APIRouts.EVENTS_LEVEL_COUNT_QUANTITY(level), body)
      .then(({ data }) => setCount(data));
  }, []);

  return (
    <div className={`${level}Class`}>
      <h1>{count}</h1>
    </div>
  );
}

ScreenCounter.propTypes = {
  level: PropTypes.string.isRequired,
};
