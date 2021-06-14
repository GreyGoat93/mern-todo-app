import { createSlice } from '@reduxjs/toolkit';
import { getUserDataById, getUserTodos, deleteTodoById, addUserTodo, editUserTodo } from '../api/users';

const initialState = {
    generalLoading: true,
    userTodosLoading: true,
    userInfo: null,
    userTodos: [],
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
    },
})

const {todosLoading, todosReceived, userInfoReceived, generalLoading} = todoSlice.actions;

export const fetchUserData = (userId) => async (dispatch) => {
    dispatch(generalLoading());
    console.log("fetching user Data /reducers");
    const response = await getUserDataById(userId);
    dispatch(userInfoReceived(response))
}

export const fetchUserTodos = (userId) => async (dispatch) => {
    dispatch(todosLoading());
    console.log("fetching user todos /reducers");
    const response = await getUserTodos(userId);
    dispatch(todosReceived(response));
}

export const deleteTodo = (todoId) => async (dispatch) => {
    const response = await deleteTodoById(todoId);
    dispatch(todosReceived(response));
}

export const addTodo = (todo) => async (dispatch) => {
    console.log("adding todo " + todo.name);
    const todoAdded = await addUserTodo(todo)
    dispatch(todosReceived);
}

export const editTodo = (todo) => async (dispatch) => {
    console.log("editing todo " + todo.name);
    const todoEdited = await editUserTodo(todo);
    dispatch(todosReceived(todoEdited));
}

export default todoSlice;