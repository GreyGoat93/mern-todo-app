import React, { useRef } from 'react';
import './EditTodoModal.scss';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../../../store';
import { editTodo } from '../../../../reducers/todoReducer';

const EditTodoModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modalReducer.editTodoModalState)
    const todoBeEdited = useSelector(state => state.modalReducer.todoBeEdited)
    const editTodoForm = useRef();

    const formData = {
        title: {
            formName: "Title",
            formType: "text",
            value: todoBeEdited?.title,
            onInput: (title) => {dispatch(modalActions.setEditTodo({...todoBeEdited, title: title}))},
        },
        description: {
            formName: "Description",
            formType: "text",
            value: todoBeEdited?.description,
            onInput: (description) => {dispatch(modalActions.setEditTodo({...todoBeEdited, description: description}))},
        },
        for_date: {
            formName: "Date",
            formType: "date",
            value: todoBeEdited?.for_date,
            onInput: (for_date) => {dispatch(modalActions.setEditTodo({...todoBeEdited, for_date: for_date}))},
        },
    }
    
    function formOnSubmitHandler(event){
        event.preventDefault();
        dispatch(editTodo(todoBeEdited))
    }

    return (
        <Modal
        modalState={modalState}
        close={() => dispatch(modalActions.toggleEditTodoModalState(false))}
        title="Edit Existing Todo"
        approve={formOnSubmitHandler}
        approveText="Edit"
        approveColor="#112288"
        approveForm="editTodo">
            <form ref={editTodoForm} id="editTodo">
                {Object.keys(formData).map(inputKey => {
                    return(
                        <div key={inputKey}>
                            <label htmlFor={`editTodo${formData[inputKey].formName}`}>{formData[inputKey].formName}:</label>
                            <input 
                            type={formData[inputKey].formType} 
                            name={`editTodo${formData[inputKey].formName}`} 
                            id={`editTodo${formData[inputKey].formName}`} 
                            value={formData[inputKey].value}
                            onChange={(event) => formData[inputKey].onInput(event.target.value)}/>
                        </div>)
                })}
            </form>
        </Modal>
    )
}

export default EditTodoModal;