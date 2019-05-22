import React from 'react';

const styles = {
    messageContainer: {
        border: '1px solid rgba(119,119,119,0.2)',
        borderRadius: 10,
        width: '100%',
        height: 'auto',
        marginBottom: 5
    },
    inputDiv: {
        display: 'flex',
        background: '#fff',
        borderRadius: 10
    },
    name: {
        color: '#0070dd',
        fontWeight: 'bold',
        marginBottom: 8
    },
    date: {
        color: '#777',
        margin: 0
    },
    messageText: {
        padding: '0 1em 1em ',
        lineHeight: '150%',
        background: '#fff',
        borderRadius: '0 0 10px 10px'
    },
    h4: {
        margin: 0,
        fontWeight: 'normal'
    },
    profilePic: {
        borderRadius: '50%',
        border: '0.1em solid rgba(119,119,119,0.2)',
        height: 50,
        width: 50,
        margin: '1em'
    }
}

const Message = () => {
    return (
        <div>
            <div style={styles.messageContainer}>
                <div style={styles.inputDiv}>
                    <img style={styles.profilePic} src="/images/testDevHeadshot1.jpg" alt="current profile pic"></img>
                    <div>
                        <h3 style={styles.name}>Thomas J.</h3>
                        <h5 style={styles.date}>05/12/2019 12:19pm</h5>
                    </div>
                </div>
                <div style={styles.messageText}>
                    <h4 style={styles.h4}>
                        Man, this site is really cool!  I am hoping I can find some good work here in Dallas.
                </h4>
                </div>
            </div>
            <div style={styles.messageContainer}>
                <div style={styles.inputDiv}>
                    <img style={styles.profilePic} src="/images/testDevHeadshot2.jpg" alt="current profile pic"></img>
                    <div>
                        <h3 style={styles.name}>Debbie R.</h3>
                        <h5 style={styles.date}>05/12/2019 10:34am</h5>
                    </div>
                </div>
                <div style={styles.messageText}>
                    <h4 style={styles.h4}>
                        Is anyone going to the React meetup this week?  If you are looking to carpool, hit me up.
                </h4>
                </div>
            </div>
            <div style={styles.messageContainer}>
                <div style={styles.inputDiv}>
                    <img style={styles.profilePic} src="/images/testDevHeadshot3.jpg" alt="current profile pic"></img>
                    <div>
                        <h3 style={styles.name}>Dave T.</h3>
                        <h5 style={styles.date}>05/11/2019 7:12pm</h5>
                    </div>
                </div>
                <div style={styles.messageText}>
                    <h4 style={styles.h4}>
                        I need some help if anyone has a second.  I am trying to figure out how floats work in CSS but it keeps breaking my code.  I have checked StackOverflow but those guys are too smart for me!  If anyone has some free time the coffee is on me!
                </h4>
                </div>
            </div>
            <div style={styles.messageContainer}>
                <div style={styles.inputDiv}>
                    <img style={styles.profilePic} src="/images/testDevHeadshot4.jpg" alt="current profile pic"></img>
                    <div>
                        <h3 style={styles.name}>Susan F.</h3>
                        <h5 style={styles.date}>05/11/2019 02:45pm</h5>
                    </div>
                </div>
                <div style={styles.messageText}>
                    <h4 style={styles.h4}>
                        I am thinking about taking the Full Stack Web Development bootcamp course that is offered at SMU.  Does anyone have any experience with this?  I heard the instructors are pretty good.
                </h4>
                </div>
            </div>
            <div style={styles.messageContainer}>
                <div style={styles.inputDiv}>
                    <img style={styles.profilePic} src="/images/testDevHeadshot5.jpg" alt="current profile pic"></img>
                    <div>
                        <h3 style={styles.name}>Chauncey D.</h3>
                        <h5 style={styles.date}>05/10/2019 10:07pm</h5>
                    </div>
                </div>
                <div style={styles.messageText}>
                    <h4 style={styles.h4}>
                        I just got a job developing a mobile app for a huge company here in DFW.  I am so excited!  I can use some extra $$$.
                </h4>
                </div>
            </div>
        </div>
    );
}
export default Message;