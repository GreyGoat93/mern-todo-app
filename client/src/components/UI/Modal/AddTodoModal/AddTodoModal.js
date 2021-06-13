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
        title="Add New Todo" 
        modalState={modalState} 
        close={() => dispatch(modalActions.toggleAddTodoModalState(false))}
        approve={() => {}}
        approveText="Add"
        approveColor="#119922">
            {props.id}
        </Modal>
    )
}
