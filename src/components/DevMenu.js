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

const DevMenu = () => {
  return (
    // <div className='br3 pa3 ma2 bw2 shadow-5' style={styles.container}>
    <ul style={styles.list}>
      <li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-check-square"></i>My Jobs</li>
      <li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-plus-square"></i>Saved Jobs</li>
      <a style={styles.a} href='/browsejobs'><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-search"></i>Browse Jobs</li></a>
      <a style={styles.a} href='/browseprofiles'><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-search"></i>Browse Developers</li></a>        
      <a style={styles.a} href='/comingsoon'><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-book"></i>Developer Resources</li></a>
      <a style={styles.a} href='/comingsoon'><li style={styles.li} className='grow pointer'><i style={styles.icon} className="fas fa-question"></i>Help</li></a>
    </ul>
    // </div>
  );
}

export default DevMenu;