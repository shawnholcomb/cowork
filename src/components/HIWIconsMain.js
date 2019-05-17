import React from 'react';

const styles = {
    HIW: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-around'
    },
    HIWSteps: {
        border: '1px solid red',
        height: 200,
        width: '25%',
        fontSize: 24,
        textAlign: 'center'
    }
}

function HIWMain() {
    return (
        <div style={styles.HIW}>
            <div style={styles.HIWSteps}>Step One</div>
            <div style={styles.HIWSteps}>Step Two</div>
            <div style={styles.HIWSteps}>Step Three</div>
            <div style={styles.HIWSteps}>Step Four</div>
        </div>
    )
};

export default HIWMain;