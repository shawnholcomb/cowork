import React from 'react';
import {Link} from 'react-router-dom'
const landingStyles = {
    h4: {
        color: '#fff'
    }
}

const styles = {
    nav: {
        maxHeight: 60,
        padding: '0.1rem 20px',
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
    h1: {
        margin: 0
    },
    h4: {
        color: '#0078df'
    },
    navLogoLinks: {
        display: 'flex',
        alignItems: 'center'
    },
    navList: {
        display: 'flex',
        direction: 'row',
        listStyleType: 'none',
        fontFamily: '"Heebo", sans-serif'
    },
    navListLi: {
        paddingRight: 30
    },
    buttonDiv: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'flex-end'
    },
    logo: {
        width: 224
    }
}

class NavBar extends React.Component {
    state = {
        isLandingPage: false
    };

    isLanding = () => {
        if (window.location.pathname === "/") {
            this.setState({ isLandingPage: true })
        }
    };

    componentDidMount() {
        this.isLanding();
      };

    render() {
        return (
            <nav style={styles.nav}>
                <div style={styles.navLogoLinks}>
                    <a href='/home'><img style={styles.logo} alt="devconnect logo" src={this.state.isLandingPage ? "images/dclogo-white.png" : "images/dclogo-color.png"}></img></a>
                </div>
                <div style={styles.navLogoLinks}>
                    <ul style={styles.navList}>
                        <li style={styles.navListLi}><a href="/works" style={styles.a}><h4 style={this.state.isLandingPage ? landingStyles.h4 : styles.h4}>How it Works</h4></a></li>
                        <li style={styles.navListLi}><Link
                        to= {{
                            state: {isAuthModalOpen:true}
                        }} style={styles.a}><h4 style={this.state.isLandingPage ? landingStyles.h4 : styles.h4}>Sign In</h4></Link></li>
                    </ul> 
                </div>
            </nav>
        )
    }
}

export default NavBar;