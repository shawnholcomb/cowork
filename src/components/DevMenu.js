import React from 'react';

const styles = {
  container: {
    border: '1px solid grey',
    width: 200,
    height: 400,
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  list: {
    display: 'flex',
    flexFlow: 'column wrap',
    listStyleType: 'none',
    justifyContent: 'flex-start',
  }
}

const DevMenu = () => {
  return (
    <div className='tc br3 pa3 ma2 bw2 shadow-5' style={styles.container}>
      <ul style={styles.list}>
        <li>My Jobs</li>
        <li>Saved Jobs</li>
        <li>Browse Jobs</li>
        <li>Browse Developers</li>
        <li>Developer Resources</li>
        <li>Help</li>
      </ul>
    </div>
  );
}

export default DevMenu;