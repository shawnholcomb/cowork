import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    container: {
        listStyleType: 'none',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0.5em 1em',
        fontFamily: '"Heebo", sans-serif',
        background: '#fff',
        borderRadius: 12,
        width: 900,
        border: '1px solid rgba(119,119,119,0.1)',
        marginBottom: 5
    },
    lightWeight: {
        fontWeight: 'normal',
        lineHeight: '150%',
        color: '#000'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    h4: {
        marginBottom: 0,
        color: '#000'
    },
    h4title: {
        marginBottom: 0,
        color: '#0070dd',
        fontWeight: 'bolder'
    },
    underline: {
        fontWeight: 'normal',
        lineHeight: '150%',
        textDecoration: 'underline',
        color: '#333'
    },
    a: {
        textDecoration: 'none'
    }
}

const JobLi = (props) => {
    return (
        <a href="/joblink" style={styles.a}>
            <li className='grow pointer' style={styles.container}>
                <div style={styles.flex}>
                    <h4 style={styles.h4title}>{props.title}</h4>
                    <h4 style={styles.h4}>Compensation: ${props.compensation}</h4>
                </div>
                <div>
                    <h4 style={styles.lightWeight}>{props.description}</h4>
                    <h5 style={styles.underline}>Click to learn more</h5>
                </div>
            </li>
        </a>
    )
}

export default JobLi;