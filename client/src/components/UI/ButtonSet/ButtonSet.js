import React from 'react';
import './ButtonSet.scss';

const ButtonSet = (props) => {
    return (
        <div className="ButtonSet">
            {props.children}
        </div>
    )
}

export default ButtonSet;