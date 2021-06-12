import React, { useRef } from 'react';
import './Modal.scss';
import './Modal.css';
import {CSSTransition} from 'react-transition-group';
import ModalBody from './ModalBody/ModalBody'
import ModalFooter from './ModalFooter/ModalFooter'
import ModalHeader from './ModalHeader/ModalHeader'

const Modal = (props) => {
    const nodeRef = useRef(null)
    const closeModal = () => {
        props.close();
    }
    // style={{display: props.modalState ? "flex" : "none", opacity: props.modalState ? "1" : "0"}}
    return (
        <CSSTransition
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
        in={props.modalState} 
        classNames="fade" 
        timeout={{enter: 500}}>
            <div className="ModalContainer" ref={nodeRef}>
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
        </CSSTransition>
    )
}

export default Modal;