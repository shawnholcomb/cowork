import React from 'react';
import Works from '../components/Works.js';
import Footer from '../components/Footer.js';

const styles = {
    background: {
        background: '#fafafa'
    }
}

function HIWPage() {
    return (
        <div style={styles.background}>
            <Works />
            <Footer />
        </div>
    );
};

export default HIWPage;