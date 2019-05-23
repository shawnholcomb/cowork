import React from 'react';
import Footer from '../components/Footer.js';
import DevMenu from '../components/DevMenu.js';
import JobPage from '../components/JobPage.js';

const styles = {
  body: {
    background: '#fafafa',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto'
  },
  profContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#fafafa',
    fontFamily: '"Heebo", sans-serif',
    display: 'flex',
    flexFlow: 'row',
  }
};

const Job1 = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.profContainer}>
          <DevMenu />
          <div>
            <JobPage />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Job1;