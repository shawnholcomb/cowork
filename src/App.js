import React from 'react';
import NavBar from './Components/NavBar'
import SignIn from './Components/SignIn'
import './App.css';

function App() {
  return (
    <div>
      <NavBar title="DevConnect" />
      <SignIn />
    </div>
  );
}

export default App;
