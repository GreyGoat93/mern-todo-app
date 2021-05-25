import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import './Button.scss';

const Button = (props) => {
    let icon = null;
    switch(props.type){
        case "Add":
            icon = (
                <FontAwesomeIcon icon={faPlus} style={{fontSize: "24px"}}/>
            )
        break;
        case "Delete":
            icon = (
                <FontAwesomeIcon icon={faTrash}/>
            )
        break;
        case "Edit":
            icon = (
                <FontAwesomeIcon icon={faPencilAlt}/>
            )
        break;
        default:

        break;
    }

    let buttonStyle = {
        height: props.height,
        width: props.width,
    }

    return (
        <div className="ButtonContainer">
            <button className="Button" style={buttonStyle}>
                {icon}
            </button>
        </div>
    )
}

export default Button;