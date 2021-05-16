import React, { useContext, useEffect } from 'react';
import { ScreenCounter, ScreenEvents, Filters } from '../components';
import { GlobalContext, updateScreenCounts, updateScreenEvents } from '../service';

import './css/dashboard.css';

export default function Dashboard() {
  const { dispatch, APIState: { order } } = useContext(GlobalContext);

  const updateEvents = () => {
    updateScreenEvents(dispatch, order);
  }
  useEffect(() => {
    updateScreenCounts(dispatch, ['error', 'warning', 'info']);
    updateEvents();
  }, [dispatch, order]);

  return (
    <div className="dashboard-container">
      <div className="panelCountLevels">
        <ScreenCounter level="warning" />
        <ScreenCounter level="error" />
        <ScreenCounter level="info" />
      </div>
      <ScreenEvents />
      <Filters />
      <button id="logo" onClick={updateEvents} ><h3>Pigable Jonson</h3></button>
    </div>
  );
}
