import React from 'react';
import Routes from './routes';
import { GlobalProvider } from './service/context';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
