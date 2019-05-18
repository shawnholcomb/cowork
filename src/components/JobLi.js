import React from 'react';

const styles = {
    container: {
        listStyleType: 'none',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '1.5em',
        fontFamily: '"Heebo", sans-serif',
        border: '1px solid #777',

    },
    lightWeight: {
        fontWeight: 'normal',
        lineHeight: '150%'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    h3: {
        marginBottom: 0
    },
    underline: {
        fontWeight: 'normal',
        lineHeight: '150%',
        textDecoration: 'underline'
    }
}

function JobLi() {
    return (
        <li style={styles.container}>
            <div style={styles.flex}>
                <h3 style={styles.h3}>Looking for landing page for new startup</h3>
                <h3 style={styles.h3}>Compensation: $300</h3>
            </div>
            <div>
                <h4 style={styles.lightWeight}>New startup SmashApp has a mobile app in development but we are currently advertising for the state-of-the-art matchmaking app.  We need a developer to design a landing page for our website.  Looking for someone with high level design abilities to create a modern, colorful, breath-taking page to help encourage excitement!</h4>
                <h4 style={styles.underline}>Click to learn more</h4>
            </div>
        </li>
    )
}

export default JobLi;