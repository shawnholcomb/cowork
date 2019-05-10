import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './Pages/LandingPage';
import Homepage from './components/Homepage';
import './App.css';
import Profile from './Pages/ProfilePage/ProfilePage';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={ LandingPage } />
            <Route exact path='/home' component={ Homepage } />
            <Route exact path='/profile' component={ Profile } />
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;