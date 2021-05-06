import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../views/Login';

// import Views from '../views';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}
