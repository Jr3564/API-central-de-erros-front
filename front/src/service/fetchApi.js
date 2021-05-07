import axios from 'axios';

export default function fetchApi(URI, body = {}) {
  const api = axios.create({
    baseURL: 'https://api-central-de-erros-java.herokuapp.com/',
    auth: {
      username: 'client-id',
      password: 'secret-id',
    },
  });

  return api.get(URI, body)
}
