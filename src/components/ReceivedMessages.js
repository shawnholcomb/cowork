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

const ReceivedMessages = () => {
  return (
    <div style={styles} className='br-pill shadow-5'>
      <p>Hello my name is Josh Beverly, I'm a local developer here in Dallas, I was wondering if we could bump weiners later?</p>
    </div>
  );
}

export default ReceivedMessages;