import React from "react";
import { Link } from "react-router-dom";

// const landingStyles = {
//   h4: {
//     color: "#fff"
//   }
// };

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

const MainNav = () => {
  return (
    <div style={styles.navLogoLinks}>
      <ul style={styles.navList}>
        <li style={styles.navListLi}>
          <a href="/works" style={styles.a}>
            <h4>
              How it Works
            </h4>
          </a>
        </li>
        <li style={styles.navListLi}>
          <Link
            to={{
              state: { isAuthModalOpen: true }
            }}
            style={styles.a}
          >
            <h4>
              Sign In
            </h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
