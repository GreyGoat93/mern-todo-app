import React from 'react';
import './Nav.scss'
import NavItem from './NavItem/NavItem';

const Nav = () => {
    const menuItems = [
        {title: "Todos", to: "/todos/1"},
        {title: "Logout", to: "/logout"},
    ]

    const menuItemsList = menuItems.map(item => {
        return <NavItem 
        key={item.title}
        title={item.title}
        to={item.to}/>
    })

    return (
        <nav className={"Nav"}>
            <ul>
                {menuItemsList}
            </ul>
        </nav>
    )
}

export default Nav;