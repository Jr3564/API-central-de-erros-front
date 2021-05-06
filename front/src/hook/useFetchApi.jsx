import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetchApi({email, password}) {
  const [state, setResult] = useState({ loading: true, results: {} });
  useEffect(() => {
    const api = axios.create({
      baseURL: 'https://api-central-de-erros-java.herokuapp.com/',
      auth: {
        username: 'client-id',
        password: 'secret-id',
      },
    });
    api.get(`oauth/token?grant_type=password&username=${email}&password=${password}`)
      .then(({ data }) => setResult((states) => ({ ...states, results: data })))
      .catch((error) =>  { throw error } );
  }, [URL]);

  const { loading, results } = state;
  return [loading, results];
}
