import React, { useState } from 'react'
import './TodoList.scss'
import TodoItem from './TodoItem/TodoItem';
import NameLabel from '../UI/NameLabel/NameLabel';
import Button from '../UI/Button/Button';
import AddTodoModal from '../UI/Modal/AddTodoModal/AddTodoModal';
import DeleteTodoModal from '../UI/Modal/DeleteTodoModal/DeleteTodoModal';

const TodoList = (props) => {
    const [addTodoModal, setAddTodoModal] = useState(false);
    const [deleteTodoModal, setDeleteTodoModal] = useState(false);
    const [deleteTodoId, setDeleteTodoId] = useState(null);

    let todos = []
    if(props.userData.todos.length <= 0){
        todos = <div className="NoTodos">No Todos!?</div>
    } else {
        todos = (
            <ul>
            {props.userData.todos.map(todo => {
            return <TodoItem 
            key={todo.id} 
            title={todo.title} 
            showDeleteTodoModal={() => {setDeleteTodoId(todo.id); showDeleteTodoModal()}}/>})}
            </ul>
        )
    }

    const showAddTodoModal = () => {
        setAddTodoModal(true);
    }

    const closeAddTodoModal = () => {
        setAddTodoModal(false);
    }

    const showDeleteTodoModal = () => {
        setDeleteTodoModal(true);
    }

    const closeDeleteTodoModal = () => {
        setDeleteTodoModal(false);
    }

    return (
        <div className="TodoList">
            <div className="NameAndMenu">
                <NameLabel>{props.userData.first_name} {props.userData.last_name}'s todos</NameLabel>
                <Button type="Add" height="32px" width="32px" onClick={showAddTodoModal}/>
            </div>
            {todos}
            <AddTodoModal 
            title="Popo"
            modalState={addTodoModal}
            close={closeAddTodoModal}>
                Some Form
            </AddTodoModal>
            <DeleteTodoModal
            title="Pipi"
            modalState={deleteTodoModal}
            close={closeDeleteTodoModal}
            id={deleteTodoId}>
                Some Form
            </DeleteTodoModal>
        </div>
    )
}

export default TodoList;