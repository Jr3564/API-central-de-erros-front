import React, { useContext, useEffect } from 'react';
import { ScreenCounter, ScreenEvents, Filters } from '../components';
import { GlobalContext, updateScreenCounts, updateScreenEvents } from '../service';

import './dashboard.css';

export default function Dashboard() {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    updateScreenCounts(dispatch, ['error', 'warning', 'info']);
    updateScreenEvents(dispatch);
  }, []);

  return (
    <div className="dashboardClass">
      <div className="panelCountLevels">
        <ScreenCounter level="error" />
        <ScreenCounter level="warning" />
        <ScreenCounter level="info" />
      </div>
      <ScreenEvents />
      <Filters />
    </div>
  );
}
