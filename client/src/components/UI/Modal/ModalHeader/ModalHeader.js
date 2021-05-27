import React from 'react'
import './ModalHeader.scss'

export default function ModalHeader(props) {
    return (
        <div className="ModalHeader">
            <h3>{props.title}</h3>
        </div>
    )
}
