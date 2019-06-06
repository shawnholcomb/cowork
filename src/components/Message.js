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
        margin: 0,
        fontWeight: 'normal'
    },
    profilePic: {
        borderRadius: '50%',
        border: '0.1em solid rgba(119,119,119,0.2)',
        height: 50,
        width: 50,
        margin: '1em'
    }
}

const Message = (props) => {
    return (
        <div>
            <div style={styles.messageContainer}>
                <div style={styles.inputDiv}>
                    <img style={styles.profilePic} src={props.image} alt="current profile pic"></img>
                    <div>
                        <h3 style={styles.name}>{props.name}</h3>
                        <h5 style={styles.date}>{props.date}</h5>
                    </div>
                </div>
                <div style={styles.messageText}>
                    <h4 style={styles.h4}>
                        {props.message}
                </h4>
                </div>
            </div>
        </div>
    );
}
export default Message;