import React from 'react';

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
        lineHeight: '150%'
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    h4: {
        marginBottom: 0
    },
    underline: {
        fontWeight: 'normal',
        lineHeight: '150%',
        textDecoration: 'underline'
    }
}

const JobLi = (props) => {
    return (
        <li className='grow pointer' style={styles.container}>
            <div style={styles.flex}>
                <h4 style={styles.h4}>{props.title}</h4>
                <h4 style={styles.h4}>Compensation: ${props.compensation}</h4>
            </div>
            <div>
                <h5 style={styles.lightWeight}>{props.description}</h5>
                <h5 style={styles.underline}>Click to learn more</h5>
            </div>
        </li>
    )
}

export default JobLi;