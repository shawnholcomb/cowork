import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    container: {
        listStyleType: 'none',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0.5em',
        fontFamily: '"Heebo", sans-serif',
        background: '#fff',
        borderRadius: 12,
        width: 900,
        border: '1px solid rgba(119,119,119,0.1)',
        marginBottom: 5,
        color: '#000',
        textDecoration: 'none'
    },
    lightWeight: {
        fontWeight: 'normal',
        lineHeight: '150%',
        margin: '0.5em 0',
        textDecoration: 'none'
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
        maxHeight: 100,
        maxWidth: 100,
        borderRadius: '50%',
        marginRight: '3em'
    },
    margin: {
        margin: '0.5em 0',
        textDecoration: 'none'
    }
}

const DevLi = () => {
    return (
        <div>
            <Link to="/profile/dev4"><li className='grow pointer' style={styles.container}>
                <div style={styles.flex}>
                    <div>
                        <img style={styles.headshot} src="/images/testDevHeadshot4.jpg" alt="developer headshot"></img>
                    </div>
                    <div>
                        <h4 style={styles.margin}>Susan F.</h4>
                        <h5 style={styles.lightWeight}>Irving, TX</h5>
                        <h5 style={styles.lightWeight}><i>Skills: HTML, CSS , Javascript</i></h5>
                        <h6 style={styles.underline}>Click to learn more</h6>
                    </div>
                </div>
            </li>
            </Link>
            <Link to="/profile/dev1"><li className='grow pointer' style={styles.container}>
                <div style={styles.flex}>
                    <div>
                        <img style={styles.headshot} src="/images/testDevHeadshot1.jpg" alt="developer headshot"></img>
                    </div>
                    <div>
                        <h4 style={styles.margin}>Thomas J.</h4>
                        <h5 style={styles.lightWeight}>Dallas, TX</h5>
                        <h5 style={styles.lightWeight}><i>Skills: HTML, CSS , Javascript, React, Node, Express</i></h5>
                        <h6 style={styles.underline}>Click to learn more</h6>
                    </div>
                </div>
            </li>
            </Link>
            <Link to="/profile/dev2"><li className='grow pointer' style={styles.container}>
                <div style={styles.flex}>
                    <div>
                        <img style={styles.headshot} src="/images/testDevHeadshot2.jpg" alt="developer headshot"></img>
                    </div>
                    <div>
                        <h4 style={styles.margin}>Debbie R.</h4>
                        <h5 style={styles.lightWeight}>Arlington, TX</h5>
                        <h5 style={styles.lightWeight}><i>Skills: HTML, CSS , Javascript, Adobe Creative Suite</i></h5>
                        <h6 style={styles.underline}>Click to learn more</h6>
                    </div>
                </div>
            </li>
            </Link>
            <Link to="/profile/dev3"><li className='grow pointer' style={styles.container}>
                <div style={styles.flex}>
                    <div>
                        <img style={styles.headshot} src="/images/testDevHeadshot3.jpg" alt="developer headshot"></img>
                    </div>
                    <div>
                        <h4 style={styles.margin}>Dave T.</h4>
                        <h5 style={styles.lightWeight}>Fort Worth, TX</h5>
                        <h5 style={styles.lightWeight}><i>Skills: HTML, CSS , Javascript, Angular, React</i></h5>
                        <h6 style={styles.underline}>Click to learn more</h6>
                    </div>
                </div>
            </li>
            </Link>
            <Link to="/profile/dev5"><li className='grow pointer' style={styles.container}>
                <div style={styles.flex}>
                    <div>
                        <img style={styles.headshot} src="/images/testDevHeadshot5.jpg" alt="developer headshot"></img>
                    </div>
                    <div>
                        <h4 style={styles.margin}>Chauncey D.</h4>
                        <h5 style={styles.lightWeight}>Dallas, TX</h5>
                        <h5 style={styles.lightWeight}><i>Skills: HTML, CSS , Javascript, MySQL, MongoDB</i></h5>
                        <h6 style={styles.underline}>Click to learn more</h6>
                    </div>
                </div>
            </li>
            </Link>
        </div>
    )
}

export default DevLi;