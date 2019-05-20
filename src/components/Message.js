import React from 'react';

const styles = {
    messageContainer: {
        border: '1px solid rgba(119,119,119,0.2)',
        borderRadius: 10,
        width: '100%',
        height: 'auto',
        marginBottom: 5
    },
    inputDiv: {
        display: 'flex',
        background: '#fff',
        borderRadius: 10
    },
    name: {
        color: '#0070dd',
        fontWeight: 'bold',
        marginBottom: 8
    },
    date: {
        color: '#777',
        margin: 0
    },
    messageText: {
        padding: '0 1em 1em ',
        lineHeight: '150%',
        background: '#fff',
        borderRadius: '0 0 10px 10px'
    },
    h4: {
        margin: 0
    },
    profilePic: {
        borderRadius: '50%',
        border: '0.1em solid rgba(119,119,119,0.2)',
        height: 50,
        width: 50,
        margin: '1em'
    }
}

const Message = () => {
    return (
        <div style={styles.messageContainer}>
            <div style={styles.inputDiv}>
                <img style={styles.profilePic} src="/images/testDevHeadshot1.jpg" alt="current profile pic"></img>
                <div>
                    <h3 style={styles.name}>Thomas J.</h3>
                    <h5 style={styles.date}>05/12/2019 12:19pm</h5>
                </div>
            </div>
            <div style={styles.messageText}>
                <h4 style={styles.h4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h4>
            </div>
        </div>
    );
}
export default Message;