import React from 'react'
import './ModalFooter.scss'

export default function ModalFooter(props) {
    return (
        <div className="ModalFooter">
            <button onClick={props.close}>Cancel</button>
            <button onClick={props.approve}>Approve</button>
        </div>
    )
}
