import React, { useContext, useEffect } from 'react';
import { ScreenCounter, ScreenEvents, Filters, ShowMoreButton } from '../components';
import { GlobalContext, updateScreenCounts, updateScreenEvents } from '../service';

import './dashboard.css';

export default function Dashboard() {
  const { dispatch, APIState: { order } } = useContext(GlobalContext);

  useEffect(() => {
    updateScreenCounts(dispatch, ['error', 'warning', 'info']);
    updateScreenEvents(dispatch, order);
  }, [dispatch, order]);

  return (
    <div className="dashboardClass">
      <div className="panelCountLevels">
        <ScreenCounter level="error" />
        <ScreenCounter level="warning" />
        <ScreenCounter level="info" />
      </div>
      <ScreenEvents />
      <Filters />
      <ShowMoreButton />
    </div>
  );
}
