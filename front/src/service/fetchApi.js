import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-central-de-erros-java.herokuapp.com/',
  auth: {
    username: 'client-id',
    password: 'secret-id',
  },
});

const fetchApi = {
  get: (URI, body) => api.get(URI, body),
  post: (URI, body) => api.post(URI, body),
  delete: (URI, body) => api.delete(URI, body),
  put: (URI, body) => api.put(URI, body),
};

export default fetchApi;
