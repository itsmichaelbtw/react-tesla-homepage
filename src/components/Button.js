import React from 'react'

export default function Button(props) {
    return (
        <div className={`item-button ${props.imp === "secondary" && "white"}`}>
            <a href={props.link}>
                {props.text}
            </a>
        </div>
    )
}
