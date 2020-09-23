import React from 'react';
import {GlobalProvider} from './context/GlobalState.jsx'
import './App.css';
import Routes from './routes';

function App() {
  return (

    <GlobalProvider >
      <Routes/>
    </GlobalProvider>
    
  );
}

export default App;
