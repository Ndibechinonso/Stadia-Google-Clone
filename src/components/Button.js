import React from 'react';
import '../App.css';

export default function Button(props) {
    return (
        <div className={props.className}>{props.text}</div>
    )
}