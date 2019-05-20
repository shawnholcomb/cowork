import React from 'react';
import MessageBoard from './MessageBoard';
import ComposeMessage from './ComposeMessage';

const styles = {
  container: {
    width: 950,
    height: '70vh',
    position: 'relative',
    padding: '1em 0',
    overflow: 'scroll'
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