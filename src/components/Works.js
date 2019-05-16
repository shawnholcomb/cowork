import React from 'react';

const styles = {
    hiwContainer: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '1em'
    },
    hiwHeaderH1: {
        textAlign: 'center',
    },
    hiwHeaderH2: {
        textAlign: 'center',
        fontWeight: 500
    },
    hiwUl: {
        listStyleType: 'none',
        // padding: 15
    },
    hiwLi: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    hiwLiH3: {
        color: '#000',
        fontWeight: 500
    },
    hiwLiImg: {
        height: '10%',
        width: '10%',
        marginRight: 15
    }
}

function Works() {
    return (
        <div style={styles.hiwContainer}>
            <div className="hiw-header">
                <h1 style={styles.hiwHeaderH1}>How It Works</h1>
                <h2 style={styles.hiwHeaderH2}>DevConnect is connecting businesses and developers in your community!  You now have the ability to work with and support local professionals or companies.  Don't rely on a stranger, support </h2>
            </div>
            <hr></hr>
            <div>
                <ul style={styles.hiwUl}>
                    <li style={styles.hiwLi}>
                        <img style={styles.hiwLiImg} alt="icon" src="/images/testicon.png"></img>
                        <h3 style={styles.hiwLiH3}>DevConnect makes it simple to connect, just sign up to get started!  Let us know if you are a business looking for help or a developer looking for work and we will start connecting you.</h3>
                    </li>
                </ul>
            </div>
            <div>
                <ul style={styles.hiwUl}>
                    <li style={styles.hiwLi}>
                        <img style={styles.hiwLiImg} alt="icon" src="/images/testicon.png"></img>
                        <h3 style={styles.hiwLiH3}>DevConnect makes it simple to connect, just sign up to get started!  Let us know if you are a business looking for help or a developer looking for work and we will start connecting you.</h3>
                    </li>
                </ul>
            </div>
            <div>
                <ul style={styles.hiwUl}>
                    <li style={styles.hiwLi}>
                        <img style={styles.hiwLiImg} alt="icon" src="/images/testicon.png"></img>
                        <h3 style={styles.hiwLiH3}>DevConnect makes it simple to connect, just sign up to get started!  Let us know if you are a business looking for help or a developer looking for work and we will start connecting you.</h3>
                    </li>
                </ul>
            </div>
            <div>
                <ul style={styles.hiwUl}>
                    <li style={styles.hiwLi}>
                        <img style={styles.hiwLiImg} alt="icon" src="/images/testicon.png"></img>
                        <h3 style={styles.hiwLiH3}>DevConnect makes it simple to connect, just sign up to get started!  Let us know if you are a business looking for help or a developer looking for work and we will start connecting you.</h3>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Works;