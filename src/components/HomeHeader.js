import React from 'react';

const styles = {
    headerImage: {
        background: 'url("/images/header-bg.jpg")',
        backgroundSize: '100%',
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-around',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)'
    },
    businessHeader: {
        background: 'url("/images/business.png") left bottom no-repeat',
        backgroundSize: 'auto 95%',
        width: '50%',
        height: 600,
        color: '#fff',
        fontSize: '2em',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontFamily: '"Heebo", sans-serif'
    },
    devHeader: {
        background: 'url("/images/developer.png") right bottom no-repeat',
        backgroundSize: 'auto 95%',
        width: '50%',
        height: 600,
        color: '#fff',
        fontSize: '2em',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontFamily: '"Heebo", sans-serif'
    },
    leftMarg: {
        marginLeft: 50
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
                    <h1 style={styles.leftMarg}>For Developers</h1>
                </div>
            </div>
        )
    }
};

export default HomeHeader;