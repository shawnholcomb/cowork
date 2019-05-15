import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom'


function LandingPage() {
    return (
        <div className="landing-page">
            <nav>
                <div className="nav-logo">
                    <a href='/home'><img alt="devconnect logo" src="images/dclogo-white.png"></img></a>
                </div>
                <div className="nav-links">
                    <ul className="nav-list">
                        <li><a href="/"><h5>How it Works</h5></a></li>
                        <li> <Link 
                        to= {{
                            state: {isAuthModalOpen:true}
                        }}> Signup</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="city-select">
                <h1>Find help in your own neighborhood</h1>
                <select>
                    <option>Select Your Location</option>
                    <option>Dallas/Fort Worth, TX</option>
                </select>
                <div className="button-div">
                    <a href="/home"><button>Search</button></a>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;