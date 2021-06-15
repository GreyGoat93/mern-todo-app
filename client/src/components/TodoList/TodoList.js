import React, { useEffect } from 'react'
import './TodoList.scss'
import TodoItem from './TodoItem/TodoItem';
import DatePicker from '../UI/DatePicker/DatePicker';
import { modalActions } from '../../store/index'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button/Button';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';

const TodoList = ({userId}) => {

    useEffect(() => {console.log("t2")})
    const dispatch = useDispatch();
    const userTodos = useSelector(state => state.todoReducer.userTodos);
    const userTodosLoading = useSelector(state => state.todoReducer.userTodosLoading)
    const todoBeAdded = useSelector(state => state.modalReducer.todoBeAdded);
    
    const showDeleteTodoModal = (todo) => {
        dispatch(modalActions.toggleDeleteTodoModalState(true));
        dispatch(modalActions.setDeleteTodo(todo));
    }

    const showEditTodoModal = (todo) => {
        dispatch(modalActions.toggleEditTodoModalState(true));
        dispatch(modalActions.setEditTodo(todo));
    }

    const showAddTodoModal = () => {
        dispatch(modalActions.setAddTodo({...todoBeAdded, userId}))
        dispatch(modalActions.toggleAddTodoModalState(true))
    }
    
    let todos = null;
    if(!userTodosLoading){
        if(userTodos.length <= 0){
            todos = <div className="NoTodos">No Todos!?</div>
        } else {
            todos = (
                <ul>
                    {userTodos.map(todo => {
                        return <TodoItem
                        key={todo.id}
                        todo={todo}
                        showDeleteTodoModal={() => {showDeleteTodoModal(todo)}}
                        showEditTodoModal={() => {showEditTodoModal(todo)}}/>
                    })}
                </ul>
            )
        }
    } else todos = (<div className="SpinnerContainer">
                        <LoadingSpinner />
                    </div>)  

    return (
        <div className="TodoList">
            <div className="NameAndMenu">
                <DatePicker />
                <Button 
                type="Add" 
                height="32px" 
                width="32px" 
                onClick={showAddTodoModal}/>
            </div>
            {todos}
        </div>
    )
}

export default TodoList;