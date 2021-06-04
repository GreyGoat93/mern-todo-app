import React, { useEffect, useState } from 'react';
import './Todos.scss';
import {getUserById, deleteTodoById} from '../../api/users.js';
import TodoList from '../../components/TodoList/TodoList';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import AddTodoModal from '../../components/UI/Modal/AddTodoModal/AddTodoModal';
import DeleteTodoModal from '../../components/UI/Modal/DeleteTodoModal/DeleteTodoModal';

let userFetched = false;

const Todos = ({match}) => {
    // const [addTodoData, setAddTodoData] = useState();
    

    return (
        <div className="TodosPage">
            {result}
            <AddTodoModal title="Popo" modalState={addTodoModal} close={() => setAddTodoModal(false)}>
                Some Form
            </AddTodoModal>
            <DeleteTodoModal title="Pipi" modalState={deleteTodoModal} close={() => setDeleteTodoModal(false)}
            deleteTodo={deleteTodo} id={deleteTodoId}>
                Some Form
            </DeleteTodoModal>
        </div>
    )
}

export default Todos