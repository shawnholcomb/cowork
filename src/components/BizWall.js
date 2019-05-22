import React from 'react';
import Ul from './Ul';
import JobLi from '../components/JobLi.js';

const styles = {
  container: {
    width: 950,
    height: '70vh',
    padding: '1em 0',
    overflow: 'scroll'
  },
  header: {
    maxWidth: 1200,
    marginLeft: 40,
    padding: '0 8px'
},
}

const BizWall = () => {
  return (
    <div>
      <div style={styles.header}>
        <h1>My Open Jobs</h1>
      </div>
      <Ul>
        <JobLi />
      </Ul>
    </div>
  );
}

export default BizWall;