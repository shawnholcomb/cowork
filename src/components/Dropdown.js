import React from 'react';
import { Link } from "react-router-dom";

const styles = {
    profilePic: {
        borderRadius: '50%',
        border: '0.1em solid rgba(119,119,119,0.2)',
        height: 40,
        width: 40,
        margin: '1em 0 1em 1em'
    },
    dropdown: {
        position: 'relative',
        display: 'inline - block'
    },
    ul: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        top: 70,
        right: -33,
        width: 170,
        background: '#fff',
        fontWeight: 'bold',
        position: 'absolute',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1
    },
    li: {
        color: '#000',
        padding: '15px 12px',
        borderBottom: '2px solid #fafafa'
    },
    liHover: {
        color: '#000',
        background: '#fafafa',
        padding: '15px 12px',
        borderBottom: '2px solid #fafafa',
    },
    a: {
        color: '#0078df',
        textDecoration: 'none'
    }
}

class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            displayMenu: false,
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }
        );
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }
        );
    }

    render() {
        return (
            <div style={styles.dropdown} onMouseOver={this.showDropdownMenu} onMouseLeave={this.hideDropdownMenu}>
                <img style={styles.profilePic} className="pointer" src="/images/shawnProfilePic.jpg" alt="profile" />
                {this.state.displayMenu ? (
                    <ul style={styles.ul}>
                        <li className="underline-hover" style={styles.li}><Link to="/profile" style={styles.a}>Edit Profile</Link></li>
                        <li className="underline-hover" style={styles.li}>
                            <Link to="https://devconnecttx.herokuapp.com/home" style={styles.a}>Sign Out</Link></li>
                    </ul>
                ) :
                    (
                        null
                    )
                }
            </div>
        );
    }
}

export default Dropdown;