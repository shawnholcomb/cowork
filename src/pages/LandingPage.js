import React from 'react';

const styles = {
    h5: {
        color: '#fff'
    },
    citySelect: {
        width: 400,
        background: '#fff',
        padding: '30px 40px',
        borderRadius: 5
    },
    citySelectH1: {
        color: '#484848',
        fontSize: '2.4em',
        marginBottom: '1rem',
        lineHeight: '150%',
        fontFamily: '"Heebo", sans-serif'
    },
    citySelectSelect: {
        width: '100%',
        height: '50px',
        fontSize: '1.2em',
        background: '#fff',
        border: '1px solid #999',
        marginBottom: '1rem',
        color: '#484848',
        fontFamily: '"Heebo", sans-serif'
    },
    citySelectButton: {
        fontSize: '1em',
        fontWeight: 'bold',
        color: '#fff',
        background: '#0078df',
        padding: '12px 20px',
        borderRadius: 5,
        fontFamily: '"Heebo", sans-serif'
    },
    container: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '80px 20px'
    }
}

class LandingPage extends React.Component {
    state = {
        isLandingPage: true
    }

    render() {
        return (
            <div style={styles.landingPage}>
                <div style={styles.container}>
                    <div style={styles.citySelect}>
                        <h1 style={styles.citySelectH1}>Find help in your own neighborhood</h1>
                        <select style={styles.citySelectSelect}>
                            <option>Select Your Location</option>
                            <option>Dallas/Fort Worth, TX</option>
                        </select>
                        <div className="button-div">
                            <a href="/home"><button style={styles.citySelectButton} onClick={
                                () => this.setState({ isLandingPage: false })
                            }>Search</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default LandingPage;