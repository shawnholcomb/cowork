import React from 'react';
import Footer from '../components/Footer.js';
import DevMenu from '../components/DevMenu.js';
import DevProfile3 from '../components/DevProfile3.js';

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

const Dev3 = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.profContainer}>
          <DevMenu />
          <div>
            <DevProfile3 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dev3;