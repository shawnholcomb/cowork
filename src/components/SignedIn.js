import React from "react";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

const styles = {
  nav: {
    maxHeight: 60,
    padding: "0.1rem 1.5rem",
    display: "flex",
    direction: "row",
    justifyContent: "space-between"
  },
  a: {
    textDecoration: "none",
    color: "0070dd",
    display: 'flex',
    alignItems: 'center',
    direction: 'row'
  },
  h1: {
    margin: 0
  },
  h4: {
    color: "#0078df",
    fontWeight: 'bold'
  },
  navLogoLinks: {
    display: "flex",
    alignItems: "center"
  },
  navList: {
    display: "flex",
    direction: "row",
    alignItems: 'center',
    listStyleType: "none",
    fontFamily: '"Heebo", sans-serif'
  },
  navListLi: {
    paddingRight: 30
  },
  buttonDiv: {
    display: "flex",
    direction: "row",
    justifyContent: "flex-end"
  },
  profilePic: {
    borderRadius: '50%',
    border: '0.1em solid rgba(119,119,119,0.2)',
    height: 40,
    width: 40,
    margin: '1em 0 1em 1em'
  }
};

const SignedIn = () => {
  return (
    <div style={styles.navLogoLinks}>
      <ul style={styles.navList}>
        <li style={styles.navListLi}>
          <Link to="/profile/shawnh" style={styles.a}>
            <h4 style={styles.h4} className="underline-hover pointer">Shawn H.</h4>
            <Dropdown />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SignedIn;
