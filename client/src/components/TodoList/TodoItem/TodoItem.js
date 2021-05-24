import React from 'react'
import Button from '../../UI/Button/Button'
import ButtonSet from '../../UI/ButtonSet/ButtonSet'
import './TodoItem.scss'

const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <span className="TodoTitle">{props.title}</span>
            <ButtonSet>
                <Button type="Edit"/>
                <Button type="Delete"/>
            </ButtonSet>
        </li>
    )
}

export default TodoItem;