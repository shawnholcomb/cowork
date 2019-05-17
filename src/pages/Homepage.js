import React from 'react';
import HomeHeader from '../components/HomeHeader.js';
import HIWMain from '../components/HIWMain.js';
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
                <Footer />
            </div>
        )
    };
};

export default Homepage;