import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Button.scss';

const Button = (props) => {
    let button = null;
    switch(props.type){
        case "Add":
            button = (
                <button className="Button">
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            )
        break;
        case "Delete":
            button = (
                <button className="Button">
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            )
        break;
        case "Edit":
            button = (
                <button className="Button">
                    <FontAwesomeIcon icon={faPencilAlt}/>
                </button>
            )
        break;
        default:

        break;
    }

    return (
        <>
            {button}
        </>
    )
}

export default Button;