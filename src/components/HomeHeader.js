import React from 'react';

const styles = {
    headerImage: {
        background: 'url("/images/header-bg.jpg") center center no-repeat',
        backgroundSize: 'cover',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
    },
    container: {
        width: 1200,
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        direction: 'row',
    },
    header: {
        background: 'url("/images/header-photo3.png") right bottom no-repeat',
        backgroundSize: 'cover',
        height: '65vh',
        width: '70%'        
    },
    text: {
        color: '#fff',
        fontSize: '2em',
        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontFamily: '"Heebo", sans-serif',
        width: '30%'

    }
}

class HomeHeader extends React.Component {
    state = {
        status: 'business',
    };

    render() {
        return (
            <div style={styles.headerImage}>
                <div style={styles.container}>
                    <div style={styles.text}>
                        <h1>Connecting business and local talent.</h1>
                    </div>
                    <div style={styles.header}></div>
                </div>
            </div>
        )
    }
};

export default HomeHeader;