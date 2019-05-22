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
    color: "#0070dd"
  },
  aLanding: {
    textDecoration: "none",
    color: '#fff'
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

class MainNav extends React.Component {
  state = {
    isLandingPage: false
  }

  isLanding = () => {
    if (window.location.pathname === "/") {
      this.setState({ isLandingPage: true });
    }
  };

  componentDidMount() {
    this.isLanding();
  }

  render() {
    return (
      <div style={styles.navLogoLinks}>
        <ul style={styles.navList}>
          <li style={styles.navListLi}>
            <a href="/works"
              style={this.state.isLandingPage
                ? styles.aLanding
                : styles.a}>
              <h4 className="underline-hover">
                How it Works
            </h4>
            </a>
          </li>
          <li style={styles.navListLi}>
            <Link
              to={{
                state: { isAuthModalOpen: true }
              }}
              style={this.state.isLandingPage
                ? styles.aLanding
                : styles.a}>
              <h4 className="underline-hover">
                Sign In
            </h4>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainNav;
