import React from './node_modules/react';

const styles = {
    h5: {
        color: '#fff'
    },
    citySelect: {
        width: 400,
        background: '#fff',
        padding: '30px 40px',
        borderRadius: 5,
        position: 'absolute',
        left: '18%',
        top: '15'
    },
    citySelectH1: {
        color: '#484848',
        fontSize: '2.4em',
        marginBottom: '1rem',
        lineHeight: '150%'
    },
    citySelectSelect: {
        width: '100%',
        height: '50px',
        fontSize: '1.2em',
        background: '#fff',
        border: '1px solid #999',
        marginBottom: '1rem',
        color: '#484848'
    },
    citySelectButton: {
        fontSize: '1em',
        fontWeight: 'bold',
        color: '#fff',
        background: '#0078df',
        padding: '12px 20px',
        borderRadius: 5
    }
}

class LandingPage extends React.Component {
    state = {
        isLandingPage: true
    }

    render() {
        return (
            <div style={styles.landingPage}>
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
        )
    };
};

export default LandingPage;