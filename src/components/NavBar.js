import React from 'react';
import {Link} from 'react-router-dom'
const landingStyles = {
    h5: {
        color: '#fff'
    }
}

const styles = {
    nav: {
        maxHeight: 60,
        padding: '0.1rem 1.5rem',
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between'
    },
    a: {
        textDecoration: 'none',
        color: 'inherit',
    },
    h1: {
        margin: 0
    },
    h5: {
        color: '#0078df'
    },
    navLogoLinks: {
        display: 'flex',
        alignItems: 'center'
    },
    navList: {
        display: 'flex',
        direction: 'row',
        listStyleType: 'none'
    },
    navListLi: {
        paddingRight: 30
    },
    buttonDiv: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'flex-end'
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
                    <a href='/home'><img alt="devconnect logo" src={this.state.isLandingPage ? "images/dclogo-white.png" : "images/dclogo-color.png"}></img></a>
                </div>
                <div style={styles.navLogoLinks}>
                    <ul style={styles.navList}>
                        <li style={styles.navListLi}><a href="/works" style={styles.a}><h5 style={this.state.isLandingPage ? landingStyles.h5 : styles.h5}>How it Works</h5></a></li>
                        <li style={styles.navListLi}><Link
                        to= {{
                            state: {isAuthModalOpen:true}
                        }} style={styles.a}><h5 style={this.state.isLandingPage ? landingStyles.h5 : styles.h5}>Sign In</h5></Link></li>
                    </ul> 
                </div>
            </nav>
        )
    }
}

export default NavBar;