import React from 'react';
import Message from './Message';

const styles = {
    container: {
        height: 620,
        position: 'relative',
        padding: '0 4px 0 0',
        overflowY: 'scroll',
        borderRadius: 10
    }
}

const MessageBoard = () => {
    return (
        <div style={styles.container}>
            <Message />
        </div>
    );
}

export default MessageBoard;