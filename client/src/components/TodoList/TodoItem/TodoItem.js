import React from 'react'
import './TodoItem.scss'

const TodoItem = (props) => {
    return (
        <li className="TodoItem">{props.children}</li>
    )
}

export default TodoItem;