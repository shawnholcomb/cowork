import React from 'react';
import './HomeHeader.css';

class HomeHeader extends React.Component {
    state = {
        status: 'business',
    };

    render() {
        return (
            <div className="header-image">
                <div className="business-header">
                    <h1>For Businesses</h1>
                </div>
                <div className="dev-header">
                    <h1>For Developers</h1>
                </div>
            </div>
        )
    }
};

export default HomeHeader;