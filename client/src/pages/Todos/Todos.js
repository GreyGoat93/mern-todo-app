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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [addTodoModal, setAddTodoModal] = useState(false);
    const [deleteTodoModal, setDeleteTodoModal] = useState(false);
    const [deleteTodoId, setDeleteTodoId] = useState(null);

    console.log(fetchState);

    const getUserData = async (userId) => {
        setLoading(true);
        const user = await getUserById(parseInt(userId));
        if(user){
            setUserData(user);
            setFetchState(false);
        } else if(!user){
            setLoading(false);
        }
    }

    const deleteTodo = async (todoId) => {
        try {
            await deleteTodoById(todoId);         
            await getUserData(match.params.id);
        } catch(err){
            setError(err)
            setLoading(false);
        }
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

    if(loading){
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
            <TodoList userData={userData} deleteTodo={deleteTodo} setDeleteTodoId={setDeleteTodoId}
            showDeleteTodoModal={() => setDeleteTodoModal(true)} showAddTodoModal={() => setAddTodoModal(true)}/>)
    }

    return (
        <div className="TodosPage">
            {result}
            {/* <AddTodoModal title="Popo" modalState={addTodoModal} close={() => setAddTodoModal(false)}>
                Some Form
            </AddTodoModal>
            <DeleteTodoModal title="Pipi" modalState={deleteTodoModal} close={() => setDeleteTodoModal(false)}
            deleteTodo={deleteTodo} id={deleteTodoId}>
                Some Form
            </DeleteTodoModal> */}
        </div>
    )
}

export default Todos