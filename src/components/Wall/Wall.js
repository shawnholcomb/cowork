import React from 'react';

const styles = {
  border: '1px solid grey',
  width: 700,
  height: 500,
  transform: 'translate(-50%, -50%)',
  position: 'relative',
  top: '50%',
  left: '50%',
  background: 'white',
}

const Wall = () => {
  return (
    <div style={styles}>
      This is the wall component
    </div>
  );
}

export default Wall;