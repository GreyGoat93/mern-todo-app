import React from 'react';
import './Header.scss';
import Nav from '../Nav/Nav'

const Header = () => {
    return (
        <header className={"Header"}>
            <h1>To-do App</h1>
            <Nav></Nav>
        </header>
    )
}

export default Header;