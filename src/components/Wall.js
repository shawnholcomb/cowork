import React from 'react';

const styles = {
  border: '1px solid grey',
  width: 700,
  height: 500,
  display: 'flex',
  // transform: 'translate(-50%, -50%)',
  // position: 'relative',
  top: '50%',
  left: '50%',
  background: 'white',
  justifyContent: 'center',
}

const Wall = () => {
  return (
    <div className='tc dib br4 pa2 ma2 bw2 shadow-5' style={styles}>
      This is the wall component
    </div>
  );
}

export default Wall;