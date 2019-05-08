import React from 'react';
import NavBar from './Components/NavBar';
import SignIn from './Components/SignIn';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar title="DevConnect" />
        <SignIn />
        <Homepage />
        <Footer />
      </div>
    )
  };
}

export default App;
