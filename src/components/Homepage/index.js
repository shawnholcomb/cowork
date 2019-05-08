import React from 'react';
import './Homepage.css';
import HomeHeader from '../HomeHeader';
import HIWMain from '../HIWMain';


class Homepage extends React.Component {
    state = {
        status: "business",
    };

    render() {
        return (
            <div>
                <HomeHeader />
                <HIWMain />
            </div>
        )
    };
};

export default Homepage;