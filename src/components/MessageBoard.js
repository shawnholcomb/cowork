import React from 'react';
import Message from './Message';

const styles = {
    container: {
        width: 950,
        height: '100%',
        position: 'relative',
        padding: '1em 0',
        overflow: 'scroll',
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