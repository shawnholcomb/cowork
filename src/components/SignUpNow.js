import React from 'react';

const styles = {
    mainDiv: {
        backgroundColor: '#f5f5f5',
        padding: '7em 0'
    },
    bg: {
        background: 'url("/images/signUpBg.png") center center no-repeat',
        backgroundSize: 'contain'
    },
    container: {
        minHeight: '20em',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '1em'
    },
    h1: {
        textAlign: 'center',
        color: '#696969',
        fontSize: '2.5em',
        margin: '0 20px 50px 0'
    },
    inputBox: {
        width: '100%',
        border: '3px solid #0070dd',
        borderRadius: 25,
        padding: 25,
        height: 40,
        marginBottom: 30,
        fontSize: '2em',
        background: '#f5f5f5'
    },
    flex: {
        display: 'flex',
        justifyContent: 'center'
    },
    icon: {
        fontSize: '2.5em',
        color: '#696969'
    },
    flexButton: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        background: '#0070dd',
        color: '#fff',
        boxShadow: '0 3px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: 25,
        padding: '8px 25px',
        fontSize: '1.5em'
    }
}

function SignUpNow() {
    return (
        <div style={styles.mainDiv}>
            <div style={styles.flex}>
                <h1 style={styles.h1}>Sign Up and Get Started Today!</h1><i style={styles.icon} class="far fa-calendar-check"></i>
            </div>
            <div style={styles.bg}>
                <div style={styles.container}>
                    <input type="text" style={styles.inputBox}></input>
                    <div style={styles.flexButton}>
                        <button style={styles.button}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUpNow;