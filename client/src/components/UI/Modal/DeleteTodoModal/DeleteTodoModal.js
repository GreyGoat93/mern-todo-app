import React from 'react'
import Modal from '../Modal'
import './DeleteTodoModal.scss'

export default function DeleteTodoModal(props) {
    return (
        <Modal modalState={props.modalState} close={props.close} title={props.title}>
            You sure you want to delete todo with id #{props.id}
        </Modal>            
    )
}
