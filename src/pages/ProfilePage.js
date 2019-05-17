import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import BizMenu from '../components/BizMenu.js';
import DevMenu from '../components/DevMenu.js';
import Wall from '../components/Wall.js';

const styles = {
  container: {
    background: '#f5f5f5',
  },
  profContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#f5f5f5',
    display: 'flex',
    flexFlow: 'row'
  }
};

const Profile = () => {
  return (
    <div>
      <div>
        <NavBar />
        <div style={styles.container}>
          <div style={styles.profContainer}>
            <BizMenu />
            <DevMenu />
              <div>
                <Wall />
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;