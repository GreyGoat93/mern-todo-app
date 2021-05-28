import React, { useEffect, useState } from 'react';
import './Todos.scss';
import {getUserById, deleteTodoById} from '../../api/users.js';
import TodoList from '../../components/TodoList/TodoList';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';
import AddTodoModal from '../../components/UI/Modal/AddTodoModal/AddTodoModal';
import DeleteTodoModal from '../../components/UI/Modal/DeleteTodoModal/DeleteTodoModal';

let userFetched = false;

const Todos = ({match}) => {
    const [userData, setUserData] = useState(null);
    const [fetchState, setFetchState] = useState("LOADING");
    const [addTodoModal, setAddTodoModal] = useState(false);
    const [deleteTodoModal, setDeleteTodoModal] = useState(false);
    const [deleteTodoId, setDeleteTodoId] = useState(null);

    console.log(fetchState);

    const getUserData = async (userId) => {
        setFetchState("LOADING");
        const user = await getUserById(parseInt(userId));
        if(user){
            console.log(user)
            setUserData(user);
            setFetchState("FOUND")
        } else if(!user){
            setFetchState("NOT FOUND")
        }
    }

    const deleteTodo = async (todoId) => {
        setFetchState("LOADING")
        await deleteTodoById(todoId);
        await getUserData(match.params.id)
    }

    useEffect(() => {
        let fetchData = async () => {
            console.log("bok");
            if(!userFetched){
                userFetched = true;
                await getUserData(match.params.id);
            }
        }
        fetchData();
    }, [userData, match.params.id])

    let result;

    if(fetchState === "LOADING"){
        result = (
            <div className="SpinnerContainer">
                <LoadingSpinner />
            </div>
        )
    }

    if(fetchState === "NOT FOUND"){
        result = <h2>No such user found!</h2>
    }

    if(fetchState === "FOUND") {
        result = (
            <TodoList 
            userData={userData}
            deleteTodo={deleteTodo}
            setDeleteTodoId={setDeleteTodoId}
            showDeleteTodoModal={() => setDeleteTodoModal(true)}
            showAddTodoModal={() => setAddTodoModal(true)}/>)
    }

    return (
        <div className="TodosPage">
            {result}
            <AddTodoModal 
            title="Popo"
            modalState={addTodoModal}
            close={() => setAddTodoModal(false)}>
                Some Form
            </AddTodoModal>
            <DeleteTodoModal
            title="Pipi"
            modalState={deleteTodoModal}
            close={() => setDeleteTodoModal(false)}
            deleteTodo={deleteTodo}
            id={deleteTodoId}>
                Some Form
            </DeleteTodoModal>
        </div>
    )
}

export default Todos