import React from 'react';

const styles = {
    container: {
        maxWidth: 900,
        margin: '0 auto',
        padding: '1.5em',
        fontFamily: '"Heebo", sans-serif',
        minHeight: '72vh',
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
        marginRight: 20
    },
    buttonDiv: {
        display: 'flex',
    },
    padright: {
        paddingRight: 10
    }
}

const JobPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.padright}>
                <h1>I need a website!</h1>
                <h3 style={styles.lightWeight}>I want to make a website where I can show off pictures of my cats.  Is there anyone that can help me?!?!</h3>
                <div style={styles.buttonDiv}>
                    <button style={styles.button} className="grow pointer">Apply for this job</button>
                    <button style={styles.button} className="grow pointer">Save this job</button>
                </div>
            </div>
            <div>
                <h3>Company: <span style={styles.lightWeight}>Susan R.</span></h3>
                <h3>Date Posted:  <span style={styles.lightWeight}>05/21/2019</span></h3>
                <h3>Compensation: <span style={styles.lightWeight}>$50</span></h3>
            </div>
        </div>
    )
}

export default JobPage;