import React from 'react';

const styles = {
    container: {
        listStyleType: 'none',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '1.5em',
        fontFamily: '"Heebo", sans-serif',
        border: '1px solid #777',

    },
    lightWeight: {
        fontWeight: 'normal',
        lineHeight: '150%',
        margin: '0.5em 0'
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    underline: {
        fontWeight: 'normal',
        lineHeight: '150%',
        textDecoration: 'underline',
        margin: '0.5em 0'
    },
    headshot: {
        maxHeight: 150,
        maxWidth: 150,
        borderRadius: '50%',
        marginRight: '3em'
    },
    margin: {
        margin: '0.5em 0'
    }
}

function DevLi() {
    return (
        <li style={styles.container}>
            <div style={styles.flex}>
                <div>
                    <img style={styles.headshot} src="/images/testDevHeadshot4.jpg" alt="developer headshot"></img>
                </div>
                <div>
                    <h2 style={styles.margin}>Susan F.</h2>
                    <h3 style={styles.lightWeight}>Irving, TX</h3>
                    <h3 style={styles.lightWeight}><i>Skills: HTML, CSS , Javascript</i></h3>
                    <h4 style={styles.underline}>Click to learn more</h4>
                </div>
            </div>
        </li>
    )
}

export default DevLi;