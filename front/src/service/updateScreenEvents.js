import { APIRouts, fetchApi } from './api';
import { actionType } from './context';
import localStorageP from './localStorage';

const body = (token) => ({
  headers: {
    authorization: `Bearer ${token}`,
  },
});

const defaultURI = APIRouts.EVENTS;

export default function updateScreenEvents(dispatch, URI = defaultURI) {
  const { access_token: token } = localStorageP.getStorage('token');

  fetchApi.get(URI, body(token))
    .then(({ data }) => dispatch({ type: actionType.UPDATE_EVENTS, payload: data.content }));
}
