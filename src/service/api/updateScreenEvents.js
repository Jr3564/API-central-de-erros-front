import APIRouts from './APIRouts';
import fetchApi from './fetchApi';
import { actionType } from '../context';
import { localStorageP } from '../../utils';

const body = (token) => ({
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export default function updateScreenEvents(dispatch, order) {
  const { access_token: token } = localStorageP.getStorage('token');

  const URI = APIRouts.EVENTS_ORDERED(order);
  console.log(URI)
  fetchApi.get(URI, body(token))
    .then(({ data }) =>{
      console.log(data)
      dispatch({ type: actionType.UPDATE_EVENTS, payload: data.content })});
}
