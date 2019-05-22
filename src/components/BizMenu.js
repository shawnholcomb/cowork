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
    padding: '0 20px'
  },
  li: {
    margin: '0.3em'
  },
  icon: {
    marginRight: 5
  },
  a: {
    textDecoration: 'none',
    color: '#0070dd'
  }
}

const BizMenu = () => {
  return (
      <ul style={styles.list}>
        <li className='grow pointer'>Post Job
        <Link
                        to= {{
                            state: {isPostJob:true}
                        }} ></Link>
        </li>
        <li className='grow pointer'>Browse Developers</li>
        <li className='grow pointer'>Browse Jobs</li>
        <li className='grow pointer'>Help</li>
      </ul>
  );
}

export default BizMenu;