import React from 'react';
import NavBar from './components/NavBar'

import Login from './components/SignIn'
import './App.css';

function App() {
  return (
    <div>
      <NavBar title="DevConnect" />
      <Login />
    </div>
  );
}

export default App;
