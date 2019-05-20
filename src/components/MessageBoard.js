import React from 'react';
import Message from './Message';

const styles = {
    container: {
        width: 980,
        height: '100%',
        position: 'relative',
        padding: '0 4px 132px 0',
        overflowY: 'scroll',
        borderRadius: 10
    }
}

const MessageBoard = () => {
    return (
        <div style={styles.container}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
}

export default MessageBoard;