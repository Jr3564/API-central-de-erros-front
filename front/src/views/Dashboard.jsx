import React, { useContext, useEffect } from 'react';
import { ScreenCounter, ScreenEvents } from '../components';
import {
  APIRouts, fetchApi, GlobalContext, localStorageP, actionType,
} from '../service';
import './dashboard.css';

const body = (token) => ({
  headers: {
    authorization: `Bearer ${token}`,
  },
});

const levels = ['error', 'warning', 'info'];

const eventURI = APIRouts.EVENTS;

export default function Dashboard() {
  const { access_token: token } = localStorageP.getStorage('token');
  const { dispatch } = useContext(GlobalContext);

  const updateScreenCount = () => {
    const promiseByLevel = levels
      .map((level) => fetchApi.get(APIRouts.EVENTS_LEVEL_COUNT_QUANTITY(level), body(token))
        .then(({ data }) => ({ [level]: data })));

    Promise.allSettled(promiseByLevel)
      .then((responses) => {
        responses.forEach(({ status, value }) => {
          if (status === 'fulfilled') {
            dispatch({ type: actionType.UPDATE_LEVEL_COUNT, payload: value });
          }
        });
      });
  };

  const updateScreenEvents = () => {
    fetchApi.get(eventURI, body(token))
      .then(({ data }) => dispatch({ type: actionType.UPDATE_EVENTS, payload: data.content }));
  };

  useEffect(() => {
    updateScreenCount();
    updateScreenEvents();
  }, []);

  return (
    <div className="dashboardClass">
      <div className="panelCountLevels">
        <ScreenCounter level="error" />
        <ScreenCounter level="warning" />
        <ScreenCounter level="info" />
      </div>
      <ScreenEvents />
    </div>
  );
}
