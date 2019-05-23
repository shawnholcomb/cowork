import React from 'react';

const styles = {
    bg: {
        background: '#fafafa',
        padding: 10
    },
    container: {
        maxWidth: 1000,
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

const DevProfile = () => {
    return (
        <div style={styles.bg}>
            <div style={styles.container}>
                <div style={styles.imageDiv}>
                    <img style={styles.headshot} src='/images/shawnProfilePic.jpg' alt="Shawn headshot"></img>
                    <h2 style={styles.lightWeight}>Shawn H.</h2>
                    <h3 style={styles.lightWeight}>Lewisville, TX</h3>
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
                    <h2 style={styles.lightWeight}>My name is Shawn and I am a web developer in DFW.</h2>
                    <h3 style={styles.lightWeight}>I recently graduated from a web development bootcamp at SMU and am excited to get working in the field.  You can check out my work by following the links to my GitHub or LinkedIn profiles on the left.  I hope to hear from you soon, I would love to see what we can build together!</h3>
                    <h3 style={styles.lightWeight}>Skills: HTML, CSS , Javascript</h3>
                </div>
            </div>
        </div>
    )
}

export default DevProfile;