import React from 'react';

const Todos = () => {
    const todoList = [
        {id: 1, title: "Wash Your Hands"},
        {id: 2, title: "Prepare Breakfast"},
        {id: 3, title: "Clean The Table"},
        {id: 4, title: "Go To Work"},
        {id: 5, title: "Buy Some Meat from Market"},
        {id: 6, title: "Prepare Meat Food"},
        {id: 7, title: "Brush Your Teeth"},
        {id: 8, title: "Sleep!"},
    ]

    const todos = todoList.map((todo, index) => {
        return <li key={todo.id}>{index + 1}. {todo.title}</li>
    })

    return (
        <div>
            <h2>Todos of 23.12.2020</h2>
            <ul>
                {todos}
            </ul>
        </div>
    )
}

export default Todos;