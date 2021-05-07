import React from 'react';
import { ScreenCounter } from '../components';
import './dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboardClass">
      <div className="panelCountLevels">
        <ScreenCounter level="error" />
        <ScreenCounter level="warning" />
        <ScreenCounter level="info" />
      </div>

    </div>
  )
}
