import React from 'react';
import {Link} from 'react-router-dom';

const styles = {
  container: {
    border: '1px solid grey',
    width: 200,
    height: 400,
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  list: {
    color: '#0070dd',
    fontWeight: 'bold',
    display: 'flex',
    flexFlow: 'column wrap',
    listStyleType: 'none',
    justifyContent: 'flex-start',
    lineHeight: 1.5,
  }
}

const DevMenu = () => {
  return (
    // <div className='br3 pa3 ma2 bw2 shadow-5' style={styles.container}>
      <ul style={styles.list}>
        <li className='grow pointer'>
        <Link
                        to= {{
                            state: {isPostJobModalOpen:true}
                        }} ></Link>My Jobs</li>
        <li className='grow pointer'>Saved Jobs</li>
        <li className='grow pointer'>Browse Jobs</li>
        <li className='grow pointer'>Browse Developers</li>
        <li className='grow pointer'>Developer Resources</li>
        <li className='grow pointer'>Help</li>
      </ul>
    // </div>
  );
}

export default DevMenu;