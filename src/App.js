import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './Pages/LandingPage';
import Homepage from './Components/Homepage';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={ LandingPage } />
            <Route exact path='/home' component={ Homepage } />
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;