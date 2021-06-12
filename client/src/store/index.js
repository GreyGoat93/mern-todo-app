import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../reducers/modalReducer';
import todoReducer from '../reducers/todoReducer';

const store = configureStore({
    reducer: {
        modalReducer: modalReducer.reducer,
        todoReducer: todoReducer.reducer,
    }
});

export const modalActions = modalReducer.actions;
export const todoActions = todoReducer.actions;
export default store;
