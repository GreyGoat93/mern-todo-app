import React from 'react';
import './EditTodoModal.scss';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../../../store';

const EditTodoModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modalReducer.editTodoModalState)
    const todoBeEdited = useSelector(state => state.modalReducer.todoBeEdited)

    return (
        <Modal
        modalState={modalState}
        close={() => dispatch(modalActions.toggleEditTodoModalState(false))}
        title="Edit Existing Todo"
        approve={() => {}}
        approveText="Edit"
        approveColor="#112288">
            {JSON.stringify(todoBeEdited)}
        </Modal>
    )
}

export default EditTodoModal;