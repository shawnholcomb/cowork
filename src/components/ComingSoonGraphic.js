import React from 'react';

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        background: '#fafafa',
        width: 800,
        paddingLeft: 50,
        minHeight: '65vh'
      }
}

const ComingSoonGraphic = () => {
  return (
    <div style={styles.container}>
        <img src="/images/comingsoon.png" alt="This feature is coming soon"></img>
    </div>
  );
}

export default ComingSoonGraphic;