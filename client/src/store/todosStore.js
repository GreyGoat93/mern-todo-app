import React from 'react';

const TodosStore = React.createContext({
    userData: null,
    loading: true,
    error: false,
    addTodoModal: false,
    deleteTodoModal: false,
    deleteTodoId: null,
});

const TodosStoreProvider = ({children}) => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [addTodoModal, setAddTodoModal] = useState(false);
    const [deleteTodoModal, setDeleteTodoModal] = useState(false);
    const [deleteTodoId, setDeleteTodoId] = useState(null);

    const getUserData = async (userId) => {
        console.log("getting data");
        setLoading(true);
        const user = await getUserById(parseInt(userId));
        if(user){
            setUserData(user);
            setLoading(false);
        } else if(!user){
            setLoading(false);
        }
    }

    const deleteTodo = async (todoId) => {
        console.log("deleting");
        try {
            await deleteTodoById(todoId);
            const newTodos = userData.todos.filter(pre => pre.id !== todoId);
            setUserData({...userData, todos: newTodos});
        } catch(err){
            console.log(err);
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
    } else if(!loading){
        if(!userData){
            result = <h2>No such user found!</h2>
        }
        else if(userData) {
            result = (
                <TodoList userData={userData} deleteTodo={deleteTodo} setDeleteTodoId={setDeleteTodoId}
                showDeleteTodoModal={() => setDeleteTodoModal(true)} showAddTodoModal={() => setAddTodoModal(true)}/>)
        }
    }

    const contextValue = {
        userData,
        getUserData,
        deleteTodo,
        loading,
        error,
        addTodoModal,
        deleteTodoModal,
        deleteTodoId,
        setDeleteTodoId,
        setDeleteTodoModal,
        setAddTodoModal
    }

    return <TodosStore.Provider value={contextValue}>{children}</TodosStore.Provider>
} 