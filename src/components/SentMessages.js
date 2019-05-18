import React from 'react';

const styles = {
  border: '1px solid blue',
  width: 400,
  height: 100,
  display: 'flex',
  flex: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'space-around',
}

const SentMessages = () => {
  return (
    <div style={styles} className='br-pill shadow-5'>
      <div>
        <p>I'm not really into that kind of stuff but thanks for the offer</p>
      </div>
    </div>
  );
}

export default SentMessages;