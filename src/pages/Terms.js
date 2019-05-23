import React from 'react';
import Footer from '../components/Footer.js';

const styles = {
    background: {
        background: '#fafafa',
        height: '75vh'
    }
}

const Terms = () => {
    return (
        <div style={styles.background}>
            <h1>Terms & Conditions</h1>
            <Footer />
        </div>
    );
};

export default Terms;