import APIRouts from './APIRouts';
import fetchApi from './fetchApi';
import { actionType } from '../context';
import { localStorageP } from '../../utils';

const body = (token) => ({
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default function requestEventsByLevel(dispatch, level) {
  const { access_token: token } = localStorageP.getStorage('token');

  const URI = APIRouts.EVENTS_LEVEL(level);
  fetchApi.get(URI, body(token))
    .then(({ data }) => {
      dispatch({ type: actionType.REQUEST_EVENTS, payload: data.content })
      dispatch({ type: actionType.PAGES_NUMBER, payload: -1 })
    });
}
