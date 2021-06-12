import React from 'react'
import './AddTodoModal.scss'
import Modal from '../Modal'
import {useSelector, useDispatch} from 'react-redux';
import { modalActions } from '../../../../store/index';

export default function AddTodoModal(props) {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modalReducer.addTodoModalState);

    return (
        <Modal 
        title={props.title} 
        modalState={modalState} 
        close={() => dispatch(modalActions.toggleAddTodoModalState(false))}>
            {props.id}
        </Modal>
    )
}
