import React, { useEffect } from 'react'
import Button from '../../UI/Button/Button'
import ButtonSet from '../../UI/ButtonSet/ButtonSet'
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner'
import { useSelector } from 'react-redux'
import './TodoItem.scss'

const TodoItem = (props) => {

    useEffect(() => {console.log("t3")})
    const isProcessing = useSelector(state => state.todoReducer.processing) === props.id

    const showEditTodoModal = (todoId) => {
        console.log(todoId);
    }

    return (
        <li className="TodoItem">
            <span className="TodoTitle">{props.title}</span>
            {isProcessing ? <LoadingSpinner /> : <ButtonSet>
                <Button type="Edit" height="32px" width="32px" onClick={() => showEditTodoModal(props.id)}/>
                <Button type="Delete" height="32px" width="32px" onClick={props.showDeleteTodoModal}/>
            </ButtonSet>}
        </li>
    )
}

export default React.memo(TodoItem)