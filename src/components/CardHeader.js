import React from 'react';

export default function CardHeader(props){
    return (
        <div className={props.className}>
            {props.text}
        </div>
    )
}