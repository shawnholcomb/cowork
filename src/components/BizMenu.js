import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link style={styles.a}
        to={{
          state: { isPostJob: true }
        }} ><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-plus-square"></i>Post Job</li></Link>
      <a style={styles.a} href='/browsejobs'><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-search"></i>Browse Jobs</li></a>
      <a style={styles.a} href='/browseprofiles'><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-search"></i>Browse Developers</li></a>
      <a style={styles.a} href='/comingsoon'><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-book"></i>Developer Resources</li></a>
      <a style={styles.a} href='/comingsoon'><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-question"></i>Help</li></a>
    </ul>
  );
}

export default BizMenu;