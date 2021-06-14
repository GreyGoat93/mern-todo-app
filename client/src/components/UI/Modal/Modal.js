import React, { useRef } from 'react';
import ButtonSet from '../ButtonSet/ButtonSet';
import './Modal.scss';
import './Modal.css';
import {CSSTransition} from 'react-transition-group';

const ModalHeader = (props) => {
    return (
        <div className="ModalHeader">
            <h3>{props.title}</h3>
        </div>
    )
}

const ModalFooter = (props) => {
    return (
        <div className="ModalFooter">
            <ButtonSet>
                <button onClick={props.cancel} className="CancelButton">Cancel</button>
                <button 
                onClick={props.approve} 
                className="ApproveButton" 
                style={{backgroundColor: props.approveColor}}
                type="submit">
                    {props.approveText}
                </button>
            </ButtonSet>
        </div>
    )
}

const ModalBody = (props) => {
    return (
        <div className="ModalBody">
            {props.children}
        </div>
    )
}

const Modal = (props) => {
    const nodeRef = useRef(null)
    const closeModal = () => {
        props.close();
    }

    return (
        <CSSTransition
        mountOnEnter
        unmountOnExit
        nodeRef={nodeRef}
        in={props.modalState} 
        classNames="fade" 
        timeout={{enter: 300}}>
            <div className="ModalContainer" ref={nodeRef}>
                <div className="ModalBackdrop" onClick={closeModal}>
                </div>
                <div className="ModalItself">
                    <ModalHeader title={props.title}/>
                    <ModalBody>
                        {props.children}
                    </ModalBody>
                    <ModalFooter
                    cancel={closeModal} 
                    approve={props.approve} 
                    approveText={props.approveText}
                    approveColor={props.approveColor}/>
                </div>
            </div>
        </CSSTransition>
    )
}

export default Modal;