import React from 'react';

const styles = {
    ul: {
        width: '100%',
        minHeight: '65vh',
    }
}
const Ul = (props) => {
    return (
        <div style={styles.ul}>
            <ul style={styles.ul}>
                {props.children}
            </ul>
        </div>
    )
}

export default Ul;