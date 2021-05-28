import React from 'react';
import './Modal.scss';
import ModalBody from './ModalBody/ModalBody'
import ModalFooter from './ModalFooter/ModalFooter'
import ModalHeader from './ModalHeader/ModalHeader'

const Modal = (props) => {
    const closeModal = () => {
        props.close();
    }

    return (
        <div className="ModalContainer" style={{display: props.modalState ? "flex" : "none", opacity: props.modalState ? "1" : "0"}}>
            <div className="ModalBackdrop" onClick={closeModal}>
            </div>
            <div className="ModalItself">
                <ModalHeader title={props.title}/>
                <ModalBody>
                    {props.children}
                </ModalBody>
                <ModalFooter approve={props.approve}/>
            </div>
        </div>
    )
}

export default Modal;