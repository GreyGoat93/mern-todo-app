import React from 'react';
import './NavItem.scss';
import { Link } from 'react-router-dom'

const NavItem = (props) => {
    return (
        <li className={"NavItem"}>
            <Link to={props.to}>
                {props.title}
            </Link>
        </li>
    )
}

export default NavItem;