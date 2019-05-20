import React from 'react';
import Footer from '../components/Footer.js';
import DevMenu from '../components/DevMenu.js';
import BizMenu from '../components/BizMenu.js';
import ComingSoonGraphic from '../components/ComingSoonGraphic.js';


const styles = {
    header: {
        maxWidth: 1200,
        paddingLeft: 40
    },
    container: {
        background: '#fafafa',
    },
    profContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        background: '#fafafa',
        display: 'flex',
        flexFlow: 'row',
        fontFamily: '"Heebo", sans-serif',
        width: '100%'
    }
};

const ComingSoon = () => {
    return (
        <div>
            <div style={styles.container}>
                <div style={styles.profContainer}>
                    <DevMenu />
                    <div>
                        <ComingSoonGraphic />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ComingSoon;