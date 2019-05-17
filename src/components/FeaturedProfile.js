import React from 'react';

const styles = {
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    },
    profileDiv: {
        background: '#f5f5f5',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        width: 200,
        padding: 30,
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.25)'
    },
    headshot: {
        borderRadius: '50%'
    },
    smallMargin: {
        margin: '.4em'
    },
    lightWeight: {
        fontWeight: 'normal'
    }
}

function FeaturedProfile() {
    return (
        <div style={styles.container}>
            <div style={styles.profileDiv}>
                <img style={styles.headshot} src="/images/testDevHeadshot1.jpg" alt="developer headshot"></img>
                <h3 style={styles.smallMargin}><i>Thomas J.</i></h3>
                <h5 style={styles.smallMargin}>Dallas, TX</h5>
                <h4 style={styles.lightWeight}><i>"Full-stack Web Developer with 4 years of experience"</i></h4>
            </div>
            <div style={styles.profileDiv}>
                <img style={styles.headshot} src="/images/testDevHeadshot2.jpg" alt="developer headshot"></img>
                <h3 style={styles.smallMargin}><i>Debbie R.</i></h3>
                <h5 style={styles.smallMargin}>Arlington, TX</h5>
                <h4 style={styles.lightWeight}><i>"I love design and want to make your project great!"</i></h4>
            </div>
            <div style={styles.profileDiv}>
                <img style={styles.headshot} src="/images/testDevHeadshot3.jpg" alt="developer headshot"></img>
                <h3 style={styles.smallMargin}><i>Dave T.</i></h3>
                <h5 style={styles.smallMargin}>Fort Worth, TX</h5>
                <h4 style={styles.lightWeight}><i>"Javascript expert with a passion for immersive websites"</i></h4>
            </div>
            <div style={styles.profileDiv}>
                <img style={styles.headshot} src="/images/testDevHeadshot4.jpg" alt="developer headshot"></img>
                <h3 style={styles.smallMargin}><i>Susan F.</i></h3>
                <h5 style={styles.smallMargin}>Irving, TX</h5>
                <h4 style={styles.lightWeight}><i>"Check out my portfolio to see the work I can do."</i></h4>
            </div>
            <div style={styles.profileDiv}>
                <img style={styles.headshot} src="/images/testDevHeadshot5.jpg" alt="developer headshot"></img>
                <h3 style={styles.smallMargin}><i>Chauncy D.</i></h3>
                <h5 style={styles.smallMargin}>Dallas, TX</h5>
                <h4 style={styles.lightWeight}><i>"Front-end expert with over 10 years experience"</i></h4>
            </div>
        </div>
    )
};

export default FeaturedProfile;