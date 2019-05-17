import React from 'react';

const styles = {
    HIW: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-around',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '2em'
    },
    HIWStepsH2: {
        color: '#0050b2',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)'
    },
    HIWStep1: {
        height: 250,
        width: '20%',
        fontSize: '1.2em',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'url("/images/signup-bg.png") center center',
        backgroundSize: 'cover'
    },
    HIWStep2: {
        height: 250,
        width: '20%',
        fontSize: '1.2em',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'url("/images/resume-bg.png") center center',
        backgroundSize: 'cover'
    },
    HIWStep3: {
        height: 250,
        width: '20%',
        fontSize: '1.2em',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'url("/images/search-bg.png") center center',
        backgroundSize: 'cover'
    },
    HIWStep4: {
        height: 250,
        width: '20%',
        fontSize: '1.2em',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'url("/images/connect-bg.png") center center',
        backgroundSize: 'cover'
    }
}

function HIWMain() {
    return (
        <div style={styles.HIW}>
            <div style={styles.HIWStep1}><h2 style={styles.HIWStepsH2}>Sign Up</h2></div>
            <div style={styles.HIWStep2}><h2 style={styles.HIWStepsH2}>Post a job or resume</h2></div>
            <div style={styles.HIWStep3}><h2 style={styles.HIWStepsH2}>Browse developers portfolios or job postings</h2></div>
            <div style={styles.HIWStep4}><h2 style={styles.HIWStepsH2}>Get connected with local businesses or developers</h2></div>
        </div>
    )
};

export default HIWMain;