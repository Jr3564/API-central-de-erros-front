import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import Views from '../views';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Views.Login} />
        <Route exact path="/dashboard" component={Views.Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
