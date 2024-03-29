import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({ todos, onDeleted,
                    onToggleImportant,
                    onToggleDone }) => {

    const elements = todos.map(({id, ...item}) => {
        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...item}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)} />
            </li>
        )
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;