import React from 'react';
import HomeHeader from '../components/HomeHeader.js';
import HIWMain from '../components/HIWMain.js';
import FeaturedDev from '../components/FeaturedDev';
import SignUpNow from '../components/SignUpNow';
import Footer from '../components/Footer.js';


class Homepage extends React.Component {
    state = {
        status: "default",
    };

    render() {
        return (
            <div>
                <HomeHeader />
                <HIWMain />
                <FeaturedDev />
                <SignUpNow />
                <Footer />
            </div>
        )
    };
};

export default Homepage;