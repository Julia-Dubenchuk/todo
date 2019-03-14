import React from 'react';

import './todo-list-item.css';

export default function TodoListItem (props) {

    const { label, onDeleted,
            onToggleImportant,
            onToggleDone,
            important, done } = props;
    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }
    
    if (important) {
        classNames += ' important'
    }
    return (
        <span className={classNames}>
            <span 
                className="todo-list-item-label"
                onClick={onToggleDone}>
                { label }
            </span>
            <div class="d-flex">
                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={onToggleImportant}>
                        <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleted}>
                        <i className="fa fa-trash-o" />
                </button>
            </div>
        </span>
    );
}