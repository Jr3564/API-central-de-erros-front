import APIRouts from './APIRouts';
import fetchApi from './fetchApi';
import { actionType, localStorageP } from '..';

const body = (token) => ({
  headers: {
    authorization: `Bearer ${token}`,
  },
});

const eventURI = APIRouts.EVENTS;

export default function updateScreenEvents(dispatch) {
  const { access_token: token } = localStorageP.getStorage('token');

  fetchApi.get(eventURI, body(token))
    .then(({ data }) => dispatch({ type: actionType.UPDATE_EVENTS, payload: data.content }));
}
