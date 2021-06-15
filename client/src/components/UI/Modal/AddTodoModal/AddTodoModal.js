import React from 'react'
import './AddTodoModal.scss'
import Modal from '../Modal'
import {useSelector, useDispatch} from 'react-redux';
import { modalActions } from '../../../../store/index';
import { addTodo } from '../../../../reducers/todoReducer';

export default function AddTodoModal() {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modalReducer.addTodoModalState);
    const todoBeAdded = useSelector(state => state.modalReducer.todoBeAdded);

    const formData = {
        title: {
            formName: "Title",
            formType: "text",
            value: todoBeAdded?.title,
            onInput: (title) => {dispatch(modalActions.setAddTodo({...todoBeAdded, title: title}))},
        },
        description: {
            formName: "Description",
            formType: "text",
            value: todoBeAdded?.description,
            onInput: (description) => {dispatch(modalActions.setAddTodo({...todoBeAdded, description: description}))},
        },
        for_date: {
            formName: "Date",
            formType: "date",
            value: todoBeAdded?.for_date,
            onInput: (for_date) => {dispatch(modalActions.setAddTodo({...todoBeAdded, for_date: for_date}))},
        },
    }

    function formOnSubmitHandler(event){
        event.preventDefault();
        dispatch(addTodo(todoBeAdded))
    }

    return (
        <Modal 
        title="Add New Todo" 
        modalState={modalState} 
        close={() => dispatch(modalActions.toggleAddTodoModalState(false))}
        approve={formOnSubmitHandler}
        approveText="Add"
        approveColor="#119922">
            <form id="addTodo">
                {Object.keys(formData).map(inputKey => {
                    return(
                        <div key={inputKey}>
                            <label htmlFor={`addTodo${formData[inputKey].formName}`}>{formData[inputKey].formName}:</label>
                            <input 
                            type={formData[inputKey].formType} 
                            name={`addTodo${formData[inputKey].formName}`} 
                            id={`addTodo${formData[inputKey].formName}`} 
                            value={formData[inputKey].value}
                            onChange={(event) => formData[inputKey].onInput(event.target.value)}/>
                        </div>)
                })}
            </form>
        </Modal>
    )
}
