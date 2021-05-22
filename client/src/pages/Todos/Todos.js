import React, { useEffect, useState } from 'react';
import './Todos.scss';
import {getUserById} from '../../api/users.js';
import TodoList from '../../components/TodoList/TodoList';
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner';

let userFetched = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Todos = ({match}) => {
    const [userData, setUserData] = useState(null);
    const [fetchState, setFetchState] = useState("LOADING");

    useEffect(() => {
        let fetchData = async () => {
            await sleep(2000);
            let user = getUserById(parseInt(match.params.id));
            if(user && !userFetched){
                console.log(user)
                setUserData(user);
                setFetchState("FOUND")
            } else if(!user){
                setFetchState("NOT FOUND")
            }
            userFetched = true;
        }
        fetchData();
    }, [userData, match.params.id])

    let result = (
        <div className="SpinnerContainer">
            <LoadingSpinner />
        </div>
    )

    if(fetchState === "NOT FOUND"){
        result = <h2>No such user found!</h2>
    }

    if(fetchState === "FOUND") {
        result = <TodoList userData={userData}/>
    }

    return (
        <div className="TodosPage">
            {result}
        </div>
    )
}

export default Todos;