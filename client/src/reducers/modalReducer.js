import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addTodoModalState: false,
    deleteTodoModalState: false,
    editTodoModalState: false,
    deleteTodoId: null,
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
        setDeleteTodoId(state, action){
            state.deleteTodoId = action.payload;
        }
    }
})

export default modalSlice;