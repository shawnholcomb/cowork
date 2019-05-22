import React from 'react';

const styles = {
    container: {
        listStyleType: 'none',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0.5em 1em',
        fontFamily: '"Heebo", sans-serif',
        background: '#fff',
        borderRadius: 12,
        width: 900,
        border: '1px solid rgba(119,119,119,0.1)',
        marginBottom: 5
    },
    lightWeight: {
        fontWeight: 'normal',
        lineHeight: '150%'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    h4: {
        marginBottom: 0
    },
    underline: {
        fontWeight: 'normal',
        lineHeight: '150%',
        textDecoration: 'underline'
    }
}

const JobLi = () => {
    return (
        <div>
        <li className='grow pointer' style={styles.container}>
            <div style={styles.flex}>
                <h4 style={styles.h4}>Looking for landing page for new startup</h4>
                <h4 style={styles.h4}>Compensation: $300</h4>
            </div>
            <div>
                <h5 style={styles.lightWeight}>New startup SmashApp has a mobile app in development but we are currently advertising for the state-of-the-art matchmaking app.  We need a developer to design a landing page for our website.  Looking for someone with high level design abilities to create a modern, colorful, breath-taking page to help encourage excitement!</h5>
                <h5 style={styles.underline}>Click to learn more</h5>
            </div>
        </li>
        <li className='grow pointer' style={styles.container}>
            <div style={styles.flex}>
                <h4 style={styles.h4}>Looking for landing page for new startup</h4>
                <h4 style={styles.h4}>Compensation: $300</h4>
            </div>
            <div>
                <h5 style={styles.lightWeight}>New startup SmashApp has a mobile app in development but we are currently advertising for the state-of-the-art matchmaking app.  We need a developer to design a landing page for our website.  Looking for someone with high level design abilities to create a modern, colorful, breath-taking page to help encourage excitement!</h5>
                <h5 style={styles.underline}>Click to learn more</h5>
            </div>
        </li>
        </div>
    )
}

export default JobLi;