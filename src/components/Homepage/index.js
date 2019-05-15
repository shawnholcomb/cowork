import React from 'react';
import './Homepage.css';
import NavBar from '../NavBar';
import HomeHeader from '../HomeHeader';
import HIWMain from '../HIWMain';

import Footer from '../Footer';

class Homepage extends React.Component {
    state = {
        status: "business",
    };

    render() {
        return (
            <div>
                <NavBar />
                <HomeHeader />
                <HIWMain />
                
                <Footer />
            </div>
        )
    };
};

export default Homepage;