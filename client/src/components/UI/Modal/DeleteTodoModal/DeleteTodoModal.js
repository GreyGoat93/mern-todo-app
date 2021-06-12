import React from 'react'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../../../store/index';
import { deleteTodo } from '../../../../reducers/todoReducer';
import './DeleteTodoModal.scss'

const DeleteTodoModal = (props) => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modalReducer.deleteTodoModalState)
    const idSetToDelete = useSelector(state => state.modalReducer.deleteTodoId)

    const approveDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
        dispatch(modalActions.toggleDeleteTodoModalState(false))
    }
    
    return (
        <Modal 
        modalState={modalState} 
        close={() => {dispatch(modalActions.toggleDeleteTodoModalState(false))}} 
        title={props.title}
        approve={() => approveDeleteTodo(idSetToDelete)}>
            You sure you want to delete todo with id #{idSetToDelete}
        </Modal>            
    )
}

export default DeleteTodoModal;
