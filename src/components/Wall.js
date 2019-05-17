import React from 'react';
import ReceivedMessages from './ReceivedMessages';
import SentMessages from './SentMessages';

const styles = {
  container: {
    border: '1px solid grey',
    width: 700,
    height: 500,
    display: 'flex',
    background: 'white',
    justifyContent: 'flex-start',
    flexFlow: 'row wrap',
  }
}

const Wall = () => {
  return (
    <div className='br2 pa3 ma2 bw2 shadow-5' style={styles.container}>
      <ReceivedMessages />
      <SentMessages />
    </div>
  );
}

export default Wall;