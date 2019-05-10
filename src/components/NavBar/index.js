import React from 'react';
import './NavBar.css';

const styles = {
    h5: {
        color: '#0078df'
    },
    border: {
        borderBottom: '1px solid #f5f5f5',
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.25)'
    }
}

const NavBar = () => (
    <nav style={styles.border}>
        <div className="nav-logo">
            <a href='/home'><img alt="devconnect logo" src="images/dclogo-color.png"></img></a>
        </div>
        <div className="nav-links">
            <ul className="nav-list">
                <li><a href="/works"><h5 style={styles.h5}>How it Works</h5></a></li>
                <li><a href="/"><h5 style={styles.h5}>Sign In</h5></a></li>

            </ul>
        </div>
    </nav>
)

export default NavBar;