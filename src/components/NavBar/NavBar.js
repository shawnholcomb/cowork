import React from 'react';
import './NavBar.css';

const NavBar = props => (
    <navbar>
        <h1><a href='/'>{props.title}</a></h1>
    </navbar>
)

export default NavBar;