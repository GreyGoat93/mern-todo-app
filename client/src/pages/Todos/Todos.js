import React, { useEffect, useState } from 'react';
import './Todos.scss';
import TodoList from '../../components/TodoList/TodoList';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import AddTodoModal from '../../components/UI/Modal/AddTodoModal/AddTodoModal';
import DeleteTodoModal from '../../components/UI/Modal/DeleteTodoModal/DeleteTodoModal';
import EditTodoModal from '../../components/UI/Modal/EditTodoModal/EditTodoModal';
import NameLabel from '../../components/UI/NameLabel/NameLabel'
import { fetchUserData, fetchUserTodos } from '../../reducers/todoReducer';
import { useDispatch, useSelector } from 'react-redux';

const Todos = ({match}) => {
    useEffect(() => {console.log("t1");})
    const [userFetched, setUserFetched] = useState(false);
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.todoReducer.userInfo)
    const generalLoading = useSelector(state => state.todoReducer.generalLoading)

    useEffect(() => {
        if(!userFetched){
            setUserFetched(true)
            dispatch(fetchUserData(match.params.id));
            dispatch(fetchUserTodos(match.params.id));
        }
    }, [match.params.id, dispatch, generalLoading, userFetched])

    let result;
    if(generalLoading){
        result = (
            <div className="SpinnerContainer">
                <LoadingSpinner />
            </div>
        )
    } else if(!generalLoading){
        if(!userInfo){
            result = <h2>No such user found!</h2>
        }
        else if(userInfo){
            result = (
                <>
                    <NameLabel>
                        {userInfo.first_name} {userInfo.last_name}'s todos
                    </NameLabel>
                    <TodoList userId={match.params.id}/>
                </>
            )
        }
    }

    return (
        <div className="TodosPage">
            {result}
            <AddTodoModal />
            <DeleteTodoModal />
            <EditTodoModal />
        </div>
    )
}

export default Todos