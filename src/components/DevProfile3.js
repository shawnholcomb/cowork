import React from 'react';

const styles = {
    bg: {
        background: '#fafafa',
        padding: 10
    },
    container: {
        maxWidth: 900,
        margin: '0 auto',
        padding: '1.5em',
        fontFamily: '"Heebo", sans-serif',
        boxShadow: '3px 3px 8px rgba(0,0,0,0.2)',
        borderRadius: 8,
        display: 'flex',
        minHeight: '70vh',
        background: '#fff',
    },
    lightWeight: {
        fontWeight: 'normal',
        lineHeight: '150%',
    },
    headshot: {
        maxHeight: 260,
        maxWidth: 260,
        borderRadius: 8,
        boxShadow: '3px 3px 3px rgba(0,0,0,0.2)',
        border: '0.5px solid #777',
        padding: '0.5em',
        background: '#fff'
    },
    icons: {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '1.3em',
        color: '#0070dd',
        margin: '1em 0'
    },
    imageDiv: {
        textAlign: 'center'
    },
    button: {
        background: '#0070dd',
        color: '#fff',
        padding: '10px 25px',
        fontSize: '1.3em',
        fontFamily: '"Heebo", sans-serif',
        borderRadius: 20,
    },
    detailsDiv: {
        padding: '0 2em'
    }
}

const DevProfile3 = () => {
    return (
        <div style={styles.bg}>
            <div style={styles.container}>
                <div style={styles.imageDiv}>
                    <img style={styles.headshot} src='/images/testDevHeadshot3.jpg' alt="Shawn headshot"></img>
                    <h2 style={styles.lightWeight}>Dave T.</h2>
                    <h3 style={styles.lightWeight}>Fort Worth, TX</h3>
                    <div style={styles.icons}>
                        <i className="far fa-envelope grow pointer"></i>
                        <i className="fas fa-phone grow pointer"></i>
                        <i className="fab fa-linkedin-in grow pointer"></i>
                        <i className="fab fa-github grow pointer"></i>
                    </div>
                    <h4 style={styles.lightWeight}>Member Since 2019</h4>
                    <button className="grow pointer" style={styles.button}>Hire Me</button>
                </div>
                <div style={styles.detailsDiv}>
                    <h2 style={styles.lightWeight}>I make websites make sense!</h2>
                    <h3 style={styles.lightWeight}>10 year JS vetran.  I make the most of your websites when it comes to interactiviy and impressiveness.  No nonsense professional looking to connect with serious businesses about serious business.</h3>
                    <h3 style={styles.lightWeight}>Skills: HTML, CSS , Javascript, Angular</h3>
                </div>
            </div>
        </div>
    )
}

export default DevProfile3;