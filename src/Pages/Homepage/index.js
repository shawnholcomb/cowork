import React from 'react';
import './Homepage.css';
import NavBar from '../../components/NavBar';
import HomeHeader from '../../components/HomeHeader'
import HIWMain from '../../components/HIWMain'
import SignIn from '../../components/SignIn';
import Footer from '../../components/Footer'

class Homepage extends React.Component {
    state = {
        status: "default",
    };

    render() {
        return (
            <div>
                <NavBar />
                <HomeHeader />
                <HIWMain />
                <SignIn />
                <Footer />
            </div>
        )
    };
};

export default Homepage;