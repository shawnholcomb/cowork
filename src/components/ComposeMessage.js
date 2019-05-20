import React from 'react';

const styles = {
    messageContainer: {
        border: '1px solid rgba(119,119,119,0.2)',
        borderRadius: '0 0 10px 10px',
        background: '#fafafa',
        width: '100%',
        height: 'auto',
        position: 'absolute',
        bottom: 0,
    },
    composeDiv: {
        padding: '0.8em',
        borderBottom: '1px solid rgba(119,119,119,0.2)',
        borderRadius: '10px 10px 0 0',
        background: '#fafafa'
    },
    compose: {
        fontWeight: 'bold',
        margin: 0,
        color: '#777'
    },
    inputDiv: {
        display: 'flex',
        background: '#fff',
        borderRadius: '0 0 10px 10px'
    },
    input: {
        width: '100%',
        height: '3em',
        border: 'none',
        borderRadius: '0 0 10px 10px',
        margin: '1em 0'
    },
    button: {
        background: '#0070dd',
        color: '#fff',
        padding: '0 1em',
        fontFamily: '"Heebo", sans-serif',
        borderRadius: 10,
        margin: '1.3em 1em'
    },
    profilePic: {
        borderRadius: '50%',
        border: '0.1em solid rgba(119,119,119,0.2)',
        height: 50,
        width: 50,
        margin: '1em'
    }
}

const ComposeMessage = () => {
    return (
            <div style={styles.messageContainer}>
                <div style={styles.composeDiv}>
                    <h4 style={styles.compose}>Compose Message</h4>
                </div>
                <div style={styles.inputDiv}>
                    <img style={styles.profilePic} src="/images/defaultProfilePic.png" alt="current profile pic"></img>
                    <input style={styles.input} type='text' placeholder="Enter your message here"></input>
                    <button className="dim pointer" style={styles.button}>Submit</button>
                </div>
            </div>
    );
}
export default ComposeMessage;