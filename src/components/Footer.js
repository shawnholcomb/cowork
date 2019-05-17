import React from 'react';

const styles = {
    footer: {
        minHeight: 60,
        background: '#0078df',
        padding: '2em'
    },
    footerContents: {
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between'
    },
    footerH1: {
        marginRight: '1em',
        color: '#0050b2'
    },
    footerH4: {
        margin: '1em',
        color: '#0050b2'
    },
    socialMedia: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between'
    },
    copy: {
        marginTop: '4em'
    },
    a: {
        textDecoration: 'none'
    }
}

function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContents}>
                <div>
                    <img alt="Company logo" src='/images/dclogo-blue.png'></img>
                    <a href='/home' style={styles.a}><h4 style={styles.footerH4}>How it Works</h4></a>
                    <a href='/home' style={styles.a}><h4 style={styles.footerH4}>Sign In</h4></a>
                </div>
                <div>
                    <div style={styles.socialMedia}>
                        <a href='/home' style={styles.a}><h1 style={styles.footerH1}><i class="fab fa-facebook-square"></i></h1></a>
                        <a href='/home' style={styles.a}><h1 style={styles.footerH1}><i class="fab fa-twitter-square"></i></h1></a>
                        <a href='/home' style={styles.a}><h1 style={styles.footerH1}><i class="fab fa-linkedin"></i></h1></a>
                        <a href='/home' style={styles.a}><h1 style={styles.footerH1}><i class="fab fa-instagram"></i></h1></a>
                    </div>
                    <div style={styles.copy}>
                        <h4 style={styles.footerH4}>&copy; 2019 DevConnect</h4>
                    </div>
                </div>
                <div>
                    <a href='/home' style={styles.a}><h4 style={styles.footerH4}>Terms of Service</h4></a>
                    <a href='/home' style={styles.a}><h4 style={styles.footerH4}>Privacy Policy</h4></a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;

