import React from 'react';
import './NameLabel.scss'

const NameLabel = ({children}) => {
    return (
        <div className="NameLabel">
            <h2>{children}</h2>
        </div>
    )
}

export default NameLabel;