import React from 'react';
import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import BizMenu from '../../components/BizMenu/BizMenu';
import DevMenu from '../../components/DevMenu/DevMenu';
import Wall from '../../components/Wall/Wall';

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