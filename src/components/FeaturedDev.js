import React from 'react';
import FeaturedProfile from './FeaturedProfile';


const styles = {
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 20px'
    },
    featureDiv: {
        minHeight: 500,
        background: 'url("/images/header-bg.jpg") center center no-repeat',
        backgroundSize: 'cover',
        padding: '5em 0 8em 0',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)'
    },
    h1: {
        color: '#fff',
        marginBottom: '1em',
        fontSize: '2em',
        fontFamily: '"Heebo", sans-serif'
    }
}

const FeaturedDev = () => {
    return (
        <div style={styles.featureDiv}>
            <div style={styles.container}>
                <h1 style={styles.h1}>Check Out our Featured Developers:</h1>
                <FeaturedProfile />
            </div>
        </div>
    )
};

export default FeaturedDev;