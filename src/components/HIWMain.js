import React from 'react';

const styles = {
    mainDiv: {
        background: '#fafafa'
    },
    Header: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '6em 0 2em 0'
    },
    HIW: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 0 8em 0'
    },
    HIWStepsH3: {
        color: '#777',
        fontFamily: '"Heebo", sans-serif'
    },
    HIWStep: {
        height: 250,
        width: '20%',
        fontSize: '1.2em',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        maxWidth: 200
    },
    h1: {
        margin: 0,
        color: '#777',
        fontFamily: '"Heebo", sans-serif'

    }
}

function HIWMain() {
    return (
        <div style={styles.mainDiv}>
            <div style={styles.Header}>
                <h1 style={styles.h1}>The Process is Simple!</h1>
            </div>
            <div style={styles.HIW}>
                <div style={styles.HIWStep}>
                    <img src='/images/signup.png' alt="Sign Up" style={styles.image}></img>
                    <h3 style={styles.HIWStepsH3}>Sign up.</h3>
                </div>
                <div style={styles.HIWStep}>
                    <img src='/images/createProfile.png' alt="Create a profile" style={styles.image}></img>
                    <h3 style={styles.HIWStepsH3}>Post a job or resume.</h3>
                </div>
                <div style={styles.HIWStep}>
                    <img src='/images/makeContact.png' alt="Make Contact" style={styles.image}></img>
                    <h3 style={styles.HIWStepsH3}>Connect with your community.</h3>
                </div>
                <div style={styles.HIWStep}>
                    <img src='/images/workComplete.png' alt="Work Complete" style={styles.image}></img>
                    <h3 style={styles.HIWStepsH3}>Get results.</h3>
                </div>
            </div>
        </div>
    )
};

export default HIWMain;