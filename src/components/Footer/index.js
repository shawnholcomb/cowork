import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-contents">
                <div>
                    <img alt="Company logo" src='/images/dclogo-blue.png'></img>
                    <a href='/home'><h4>How it Works</h4></a>
                    <a href='/home'><h4>Sign In</h4></a>
                </div>
                <div>
                    <div className="social-media">
                        <a href='/home'><h1><i class="fab fa-facebook-square"></i></h1></a>
                        <a href='/home'><h1><i class="fab fa-twitter-square"></i></h1></a>
                        <a href='/home'><h1><i class="fab fa-linkedin"></i></h1></a>
                        <a href='/home'><h1><i class="fab fa-instagram"></i></h1></a>
                    </div>
                    <div className="copy">
                        <h4>&copy; 2019 DevConnect</h4>
                    </div>
                </div>
                <div>
                    <a href='/home'><h4>Terms of Service</h4></a>
                    <a href='/home'><h4>Privacy Policy</h4></a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;

