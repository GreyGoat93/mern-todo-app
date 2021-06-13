import React, { useEffect } from 'react'
import Button from '../../UI/Button/Button'
import ButtonSet from '../../UI/ButtonSet/ButtonSet'
import './TodoItem.scss'

const TodoItem = (props) => {

    useEffect(() => {console.log("t3")})

    return (
        <>
            <li className="TodoItem">
                <span className="TodoTitle">{props.todo.title}</span>
                <ButtonSet>
                    <Button type="Edit" height="32px" width="32px" onClick={props.showEditTodoModal}/>
                    <Button type="Delete" height="32px" width="32px" onClick={props.showDeleteTodoModal}/>
                </ButtonSet>
            </li>
        </>
    )
}

export default React.memo(TodoItem)