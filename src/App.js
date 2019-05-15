import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './Pages/LandingPage';
import Homepage from './Pages/Homepage';
import HIWPage from './Pages/HIWPage';
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
            <Route exact path='/works' component={ HIWPage } />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;