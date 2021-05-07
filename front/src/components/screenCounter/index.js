import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './screenCounterStyle.css';
import { GlobalContext } from '../../service/context';
import { APIRouts } from '../../service';
import axios from 'axios';

export default function ScreenCounter({ level }) {
  const { GlobalState: { token } } = useContext(GlobalContext);
  const [count, setCount] = useState(0);
  console.log(token);
  const fetchToken = () => {
    const api = axios.create({
      baseURL: APIRouts.URL,
      auth: {
        username: 'client-id',
        password: 'secret-id',
      },
    });

    const body = {
      headers: {
        "authorization": `Bearer ${token}`
      } 
    }
    
    api.get(APIRouts.EVENTS_LEVEL_COUNT_QUANTITY(level), body)
      .then(({ data }) => setCount(data))
      .catch((error) => console.log(error));

  }
  
  fetchToken();

  return (
    <div className={`${level}Class`}>
      <h1>{count}</h1>
    </div>
  )
}

ScreenCounter.propTypes = {
  level: PropTypes.string.isRequired,
}