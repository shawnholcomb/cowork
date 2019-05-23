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

const DevProfile2 = () => {
    return (
        <div style={styles.bg}>
            <div style={styles.container}>
                <div style={styles.imageDiv}>
                    <img style={styles.headshot} src='/images/testDevHeadshot2.jpg' alt="Shawn headshot"></img>
                    <h2 style={styles.lightWeight}>Debbie R.</h2>
                    <h3 style={styles.lightWeight}>Arlington, TX</h3>
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
                    <h2 style={styles.lightWeight}>Professional, efficient designer looking to help local businesses.</h2>
                    <h3 style={styles.lightWeight}>My name is Debbie and I am passionate about bringing ideas to life!  I have been working with Adobe Creative Suite for over 5 years now and I love my work.  I recently started a freelance business and am hoping that DevConnect can bring me together with some local businesses who can use my talents.  Please check out my portfolio, you will not be sorry!</h3>
                    <h3 style={styles.lightWeight}>Skills: Adobe Photoshop, Illustrator, Lightroom, Sketch</h3>
                </div>
            </div>
        </div>
    )
}

export default DevProfile2;