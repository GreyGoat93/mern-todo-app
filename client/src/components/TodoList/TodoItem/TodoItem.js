import React, { useEffect } from 'react'
import Button from '../../UI/Button/Button'
import ButtonSet from '../../UI/ButtonSet/ButtonSet'
import './TodoItem.scss'

const TodoItem = (props) => {

    useEffect(() => {console.log("bok3")})

    const showEditTodoModal = (todoId) => {
        console.log(todoId);
    }

    return (
        <li className="TodoItem">
            <span className="TodoTitle">{props.title}</span>
            <ButtonSet>
                <Button type="Edit" height="32px" width="32px" onClick={() => showEditTodoModal(props.id)}/>
                {/* <Button type="Delete" height="32px" width="32px" onClick={() => props.showDeleteTodoModal(props.id)}/> */}
                <Button type="Delete" height="32px" width="32px" onClick={() => props.deleteTodo(props.id)}/>
            </ButtonSet>
        </li>
    )
}

export default TodoItem