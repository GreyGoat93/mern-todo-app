import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addTodoModalState: false,
    deleteTodoModalState: false,
    editTodoModalState: false,
    todoBeDeleted: null,
    todoBeEdited: null,
    todoBeAdded: {
        userId: null,
        name: "",
        description: "",
    },
}

const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        toggleAddTodoModalState(state, action){
            state.addTodoModalState = action.payload;
        },
        toggleDeleteTodoModalState(state, action){
            state.deleteTodoModalState = action.payload;
        },
        toggleEditTodoModalState(state, action){
            state.editTodoModalState = action.payload;
        },
        setDeleteTodo(state, action){
            state.todoBeDeleted = action.payload;
        },
        setAddTodo(state, action){
            state.todoBeAdded = action.payload;
        },
        setAddTodoUser(state, action){
            state.todoBeAdded.userId = action.payload;
        },
        setEditTodo(state, action){
            state.todoBeEdited = action.payload;
        }
    }
})

export default modalSlice;