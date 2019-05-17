import React from 'react';

const styles = {
    headerImage: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-around',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)'
    },
    businessHeader: {
        background: 'url("/images/business-bg.jpg") center center',
        width: '50%',
        height: 600,
        color: '#fff',
        fontSize: '2em',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    devHeader: {
        background: 'url("/images/developer-bg.jpg")',
        backgroundPositionY: '19%',
        backgroundSize: '100% auto',
        width: '50%',
        height: 600,
        color: '#fff',
        fontSize: '2em',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

class HomeHeader extends React.Component {
    state = {
        status: 'business',
    };

    render() {
        return (
            <div style={styles.headerImage}>
                <div style={styles.businessHeader}>
                    <h1>For Businesses</h1>
                </div>
                <div style={styles.devHeader}>
                    <h1>For Developers</h1>
                </div>
            </div>
        )
    }
};

export default HomeHeader;