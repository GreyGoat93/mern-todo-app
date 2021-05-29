import React, { useEffect } from 'react'
import './TodoList.scss'
import TodoItem from './TodoItem/TodoItem';
import NameLabel from '../UI/NameLabel/NameLabel';
import Button from '../UI/Button/Button';
import _ from 'lodash';

const TodoList = (props) => {

    useEffect(() => {console.log("bok2")})

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
                deleteTodo={props.deleteTodo}
                showDeleteTodoModal={() => {props.setDeleteTodoId(todo.id); props.showDeleteTodoModal()}}/>})}
            </ul>
        )
    }

    return (
        <div className="TodoList">
            <div className="NameAndMenu">
                <NameLabel>
                    {props.userData.first_name} {props.userData.last_name}'s todos
                </NameLabel>
                <Button 
                type="Add" 
                height="32px" 
                width="32px" 
                onClick={props.showAddTodoModal}/>
            </div>
            {todos}
        </div>
    )
}

const compareProps = (prev, next) => {
    // if(_.isEqual(prev.userData, next.userData)) return true;
    return false;
}

export default TodoList