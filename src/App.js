import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage.js';
import Homepage from './pages/Homepage.js';
import HowItWorks from './pages/HowItWorks.js';
import Profile from './pages/ProfilePage';
import BrowseProfiles from './pages/BrowseProfiles';
import ComingSoon from './pages/ComingSoon';
import BrowseJobs from './pages/BrowseJobs';
import AuthModal from './components/AuthModal.js';
import PostJob from './components/PostJob';
import Terms from './pages/Terms';
import ShawnProfile from './pages/ShawnProfile';
import MyJobs from './pages/MyJobs';
import SavedJobs from './pages/SavedJobs';
import Dev1 from './pages/Dev1';
import Dev2 from './pages/Dev2';
import Dev3 from './pages/Dev3';
import Dev4 from './pages/Dev4';
import Dev5 from './pages/Dev5';
import Job1 from './pages/Job1';


const styles = {
  landingPage: {
    background: 'url("/images/landingpage-bg.jpg") center center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw'
  }
};

class App extends React.Component {
  state = {
    isLandingPage: false
  };

  isLanding = () => {
    if (window.location.pathname === "/") {
      this.setState({ isLandingPage: true })
    }
  };

  componentDidMount() {
    this.isLanding();
  };

  render() {
    return (
      <Router>
        <div style={this.state.isLandingPage ? styles.landingPage : null}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={Homepage} />
            <Route exact path='/works' component={HowItWorks} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/browsejobs' component={BrowseJobs} />
            <Route exact path='/browseprofiles' component={BrowseProfiles} />
            <Route exact path='/comingsoon' component={ComingSoon} />
            <Route exact path='/terms' component={Terms} />
            <Route exact path='/profile/shawnh' component={ShawnProfile} />
            <Route exact path='/currentjobs' component={MyJobs} />
            <Route exact path='/savedjobs' component={SavedJobs} />
            <Route exact path='/profile/dev1' component={Dev1} />
            <Route exact path='/profile/dev2' component={Dev2} />
            <Route exact path='/profile/dev3' component={Dev3} />
            <Route exact path='/profile/dev4' component={Dev4} />
            <Route exact path='/profile/dev5' component={Dev5} />
            <Route exact path='/joblink' component={Job1} />
          </Switch>
          <AuthModal />
          <PostJob />
        </div>
      </Router>
    )
  }
};

export default App;