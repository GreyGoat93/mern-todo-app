import React from 'react'
import './TodoList.scss'
import TodoItem from './TodoItem/TodoItem';
import NameLabel from '../UI/NameLabel/NameLabel';

const TodoList = (props) => {
    let todos = []
    if(props.userData.todos.length <= 0){
        todos = <div>No Todos!?</div>
    } else {
        todos = (
                <ul>
                {props.userData.todos.map(todo => {
                return <TodoItem key={todo.id}>{todo.title} | {todo.created_date}</TodoItem>})}
                </ul>
            )
    }

    return (
        <div className="TodoList">
            <div className="NameAndMenu">
                <NameLabel>{props.userData.first_name} {props.userData.last_name}'s todos;</NameLabel>
                <div className="Buttons">
                   <button>Add</button>
                </div>
            </div>
            {todos}
        </div>
    )
}

export default TodoList;