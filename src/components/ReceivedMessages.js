import React from 'react';

const styles = {
  border: '1px solid blue',
  width: 400,
  height: 100,
  display: 'flex',
  flex: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center',
}

const ReceivedMessages = () => {
  return (
    <div style={styles} className='br-pill shadow-5'>
      <div>
        Received Messages
      </div>
    </div>
  );
}

export default ReceivedMessages;