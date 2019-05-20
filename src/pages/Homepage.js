import React from 'react';
import HomeHeader from '../components/HomeHeader.js';
import HIWMain from '../components/HIWMain.js';
import FeaturedDev from '../components/FeaturedDev'; 
import Footer from '../components/Footer.js';

class Homepage extends React.Component {
  state = {
    status: "default"
  };

  render() {
    return (
      <div>
        <HomeHeader />
        <HIWMain />
        <FeaturedDev />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
