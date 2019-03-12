import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header d-flex mt-5 mb-4">
            <h1 className="mr-auto">Todo List</h1>
            <h2 className="text-muted font-size-24 align-self-end">{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default AppHeader;