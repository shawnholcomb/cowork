import React from "react";
import { Link } from "react-router-dom";

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
    color: "inherit"
  },
  h1: {
    margin: 0
  },
  h4: {
    color: "#0078df"
  },
  navLogoLinks: {
    display: "flex",
    alignItems: "center"
  },
  navList: {
    display: "flex",
    direction: "row",
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
  }
};

const SignedIn = () => {
  return (
    <div style={styles.navLogoLinks}>
      <ul style={styles.navList}>
        <li style={styles.navListLi}>
          <a href="/profile" style={styles.a}>
            <img src="" alt="profile" />
          </a>
        </li>
        <li style={styles.navListLi}>
          <a href="/home" style={styles.a}>
            <h4>Sign Out</h4>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SignedIn;
