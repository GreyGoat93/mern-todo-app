import React from 'react'
import './AddTodoModal.scss'
import Modal from '../Modal'

export default function AddTodoModal(props) {
    return (
        <Modal title={props.title} modalState={props.modalState} close={props.close}>
            {props.id}
        </Modal>
    )
}
