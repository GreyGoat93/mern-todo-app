import React from 'react'
import Button from '../../UI/Button/Button'
import ButtonSet from '../../UI/ButtonSet/ButtonSet'
import './TodoItem.scss'

const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <span className="TodoTitle">{props.title}</span>
            <ButtonSet>
                <Button type="Edit" height="32px" width="32px"/>
                <Button type="Delete" height="32px" width="32px"/>
            </ButtonSet>
        </li>
    )
}

export default TodoItem;