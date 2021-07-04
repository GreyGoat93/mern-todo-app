import { createSlice } from '@reduxjs/toolkit';
import { getUserDataById, getUserTodos, deleteTodoById, addUserTodo, editUserTodo, findDistinctTodoDates } from '../api/users';
import { toast } from "react-toastify";

const initialState = {
    generalLoading: true,
    userTodosLoading: true,
    userInfo: null,
    userTodos: [],
    userTodoDates: [],
    errorGeneral: null,
    errorTodos: null,
}

const todoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        generalLoading(state){
            state.generalLoading = true;
        },
        userInfoReceived(state, action){
            state.generalLoading = false;
            state.userInfo = action.payload;
        },
        todosLoading(state){
            state.userTodosLoading = true;
        },
        todosReceived(state, action){
            state.userTodosLoading = false;
            state.userTodos = action.payload;
        },
        setUserTodoDates(state, action){
            state.userTodoDates = action.payload;
        }
    },
})

const {todosLoading, todosReceived, userInfoReceived, generalLoading, setUserTodoDates} = todoSlice.actions;

export const fetchUserData = (userId) => async (dispatch) => {
    dispatch(generalLoading());
    console.log("fetching user Data /reducers");
    const userData = await getUserDataById(userId);
    const userTodoDates = findDistinctTodoDates(userId);
    dispatch(setUserTodoDates(userTodoDates));
    dispatch(userInfoReceived(userData));
}

export const fetchUserTodos = (userId, for_date = null) => async (dispatch) => {
    dispatch(todosLoading());
    console.log(for_date);
    console.log("fetching user todos /reducers");
    const response = await getUserTodos(userId, for_date);
    dispatch(todosReceived(response))
}

export const deleteTodo = (todoId) => async (dispatch) => {
    try {
        const response = await deleteTodoById(todoId);
        dispatch(todosReceived(response));
        toast.success("Deleted todo.")
    } catch(err){
        toast.error("Error");
    }
}

export const addTodo = (todo) => async (dispatch) => {
    try {
        const todoAdded = await addUserTodo(todo)
        dispatch(todosReceived(todoAdded));
        toast.success("Added todo.")
    } catch(err){
        toast.error("Error");
    }
}

export const editTodo = (todo) => async (dispatch) => {
    try {
        console.log("editing todo " + todo.name);
        const todoEdited = await editUserTodo(todo);
        dispatch(todosReceived(todoEdited));
        toast.success("Edited todo.");
    } catch(err){
        toast.error("Error");
    }
}

export default todoSlice;