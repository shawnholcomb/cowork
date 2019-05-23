import React from "react";
import MainNav from "./MainNav";
import SignedIn from "./SignedIn";

const styles = {
  nav: {
    maxHeight: 60,
    padding: "0.1rem 1.5rem",
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    maxWidth: 1200,
    margin: '0 auto'
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
  },
  logo: {
    width: 200,
    marginBottom: 10
  }
};

class NavBar extends React.Component {
  state = {
    isLandingPage: false,
    isSignedIn: false,
    isProfile: true,
  };

  isLanding = () => {
    if (window.location.pathname === "/") {
      this.setState({ isLandingPage: true });
    }
  };

  isProfile = () => {
    switch (window.location.pathname) {
      case '/':
        this.setState({ isProfile: false })
        break;
      case '/home':
        this.setState({ isProfile: false })
        break;
      default:
        this.setState({ isProfile: true })
    }
  };

  componentDidMount() {
    this.isLanding();
    this.isProfile();
  };

  render() {
    return (
      <nav style={styles.nav}>
        <div style={styles.navLogoLinks}>
          <a href="/home">
            <img
              style={styles.logo}
              alt="devconnect logo"
              src={
                this.state.isLandingPage
                  ? "images/dclogo-white.png"
                  : "images/dclogo-color.png"
              }
            />
          </a>
        </div>
        {this.state.isProfile ? <SignedIn /> : <MainNav />}
      </nav>
    );
  }
}

export default NavBar;
