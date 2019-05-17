import React from 'react';

const styles = {
    footer: {
        minHeight: 60,
        background: '#0078df',
        padding: '2em'
    },
    footerContents: {
        maxWidth: 1200,
        margin: '0 auto'
    },
    footerH1: {
        marginRight: '1em',
        color: '#0050b2'
    },
    footerH4: {
        margin: '0.1em 0',
        color: '#0050b2',
        fontWeight: 'normal'
    },
    H4: {
        margin: '0.3em 0',
        color: '#0050b2',
    },
    socialMedia: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'flex-start'
    },
    a: {
        textDecoration: 'none'
    },
    flex: {
        display: 'flex'
    },
    bottomBorder: {
        marginTop: '1em',
        borderBottom: '1px solid #0050b2',
        paddingBottom: '1.5em'
    }
}

function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContents}>
                <div>
                    <img alt="Company logo" src='/images/dclogo-blue.png'></img>
                </div>
                <div style={styles.flex}>
                    <a href='/home' style={styles.a}><h4 style={styles.footerH4}>Terms of Service</h4></a>
                    <h4 style={styles.footerH4}>|</h4>
                    <a href='/home' style={styles.a}><h4 style={styles.footerH4}>Privacy Policy</h4></a>
                </div>
                <div>
                    <h5 style={styles.footerH4}>&copy; 2019 DevConnect</h5>
                </div>
                <div style={styles.bottomBorder}>
                    <a href='/home' style={styles.a}><h4 style={styles.H4}>How it Works</h4></a>
                    <a href='/home' style={styles.a}><h4 style={styles.H4}>Sign In</h4></a>
                </div>
                <div>
                    <div style={styles.socialMedia}>
                        <a href='/home' style={styles.a}><h1 style={styles.footerH1}><i class="fab fa-facebook-square"></i></h1></a>
                        <a href='/home' style={styles.a}><h1 style={styles.footerH1}><i class="fab fa-twitter-square"></i></h1></a>
                        <a href='/home' style={styles.a}><h1 style={styles.footerH1}><i class="fab fa-linkedin"></i></h1></a>
                        <a href='/home' style={styles.a}><h1 style={styles.footerH1}><i class="fab fa-instagram"></i></h1></a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;

