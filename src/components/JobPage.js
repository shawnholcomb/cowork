import React from 'react';

const styles = {
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '1.5em',
        fontFamily: '"Heebo", sans-serif',
        border: '1px solid #777',
        display: 'flex'
    },
    lightWeight: {
        fontWeight: 'normal',
        lineHeight: '150%'
    },
    button: {
        background: '#0070dd',
        color: '#fff',
        padding: '10px 25px',
        fontSize: '1em',
        fontFamily: '"Heebo", sans-serif',
        borderRadius: 20,
    }
}

const JobPage = () => {
    return (
        <div style={styles.container}>
            <div>
                <h1>Looking for landing page for new startup</h1>
                <h3 style={styles.lightWeight}>New startup SmashApp has a mobile app in development but we are currently advertising for the state-of-the-art matchmaking app.  We need a developer to design a landing page for our website.  Looking for someone with high level design abilities to create a modern, colorful, breath-taking page to help encourage excitement!</h3>
                <button style={styles.button}>Apply for this job</button>
            </div>
            <div>
                <h3>Company: <span style={styles.lightWeight}>SmashApp, Inc.</span></h3>
                <h3>Date Posted:  <span style={styles.lightWeight}>05/21/2019</span></h3>
                <h3>Compensation: <span style={styles.lightWeight}>$300</span></h3>
            </div>
        </div>
    )
}

export default JobPage;