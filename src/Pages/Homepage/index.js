import React from 'react';
import './Homepage.css';
import NavBar from '../../Components/NavBar';
import HomeHeader from '../../Components/HomeHeader';
import HIWMain from '../../Components/HIWMain';
import SignIn from '../../Components/SignIn';
import Footer from '../../Components/Footer';

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