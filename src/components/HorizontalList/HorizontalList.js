import React from 'react';
import './HorizontalList.css';

const HorizontalList = props => (
    <ul>
        {props.array.map(element => <li>{element}</li>)}
    </ul>
)

export default HorizontalList;