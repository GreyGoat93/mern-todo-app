import React from 'react'
import Modal from '../Modal'
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../../../store/index';
import { deleteTodo } from '../../../../reducers/todoReducer';
import './DeleteTodoModal.scss'

const DeleteTodoModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modalReducer.deleteTodoModalState)
    const todoBeDeleted = useSelector(state => state.modalReducer.todoBeDeleted)

    const approveDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
        dispatch(modalActions.toggleDeleteTodoModalState(false))
    }
    
    return (
        <>
            <Modal
            modalState={modalState}
            close={() => {dispatch(modalActions.toggleDeleteTodoModalState(false))}}
            title="Delete Todo"
            approve={() => approveDeleteTodo(todoBeDeleted?.id)}
            approveText="Delete"
            approveColor="#FF1122">
                <div className="DeleteTodoModalBody">
                    <h3>Are you sure that you want to delete this todo:</h3>
                    <div>
                        <p>{`Title: "${todoBeDeleted?.title}"`}</p>
                    </div>
                    <div>
                        <p>{`Date: "${todoBeDeleted?.created_date}"`}</p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DeleteTodoModal;
