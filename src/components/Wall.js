import React from 'react';
import MessageBoard from './MessageBoard';
import ComposeMessage from './ComposeMessage';

const styles = {
  container: {
    width: 960,
    maxWidth: '100%',
    height: '75vh',
    position: 'relative',
    padding: '1em 0 0 0',
    overflow: 'hidden',
    background: '#fafafa'
  }
}

const Wall = () => {
  return (
    <div style={styles.container}>
      <MessageBoard />
      <ComposeMessage />
    </div>
  );
}

export default Wall;