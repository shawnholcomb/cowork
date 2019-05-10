import React from 'react';
import NavBar from '../../components/NavBar/index';
import Footer from '../../components/Footer/index';
import BizMenu from '../../components/BizMenu/BizMenu';
import DevMenu from '../../components/DevMenu/DevMenu';
import Wall from '../../components/Wall/Wall';
import './ProfilePage.css';

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <BizMenu />
        <DevMenu />
        <Wall />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;