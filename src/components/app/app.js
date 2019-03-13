import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        todoDatadone: null
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray,
                todoDatadone: null
            }
        });
    };

    addItem = (text) => {
        // generate id
        const newItem = this.createTodoItem(text);
        // add element in array
        this.setState (({ todoData }) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray,
                todoDatadone: null
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};

            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
        }

    onToggleDone = (id) => {
        this.setState(({ todoData })=> {
            return {
                todoData: this.toggleProperty(todoData, id, 'done'),
                todoDatadone: null
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important'),
                todoDatadone: null
            };
        });
    };

    clickFilter = (propName = '') => {

        console.log('all', propName);
        this.setState(({ todoData }) => {
            const todoFilterData = todoData.filter((el) => {
                return propName ? el[propName] : true
            }
                );
            console.log(todoData);
            return {
                todoDatadone: todoFilterData
            }
        });
    };

    changeSearch = (value) => {
        this.setState(( {todoData} ) => {
            const newArray = todoData.filter((item) => {
                return item.label.toLowerCase().indexOf(value.toLowerCase()) > -1;
            });
            return {
                todoDatadone: newArray
            };
        });
    };

    render() {

        const { todoData, todoDatadone } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="container col-6 px-0">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex mb-3">
                    <SearchPanel onChangeSearch={this.changeSearch}/>
                    <ItemStatusFilter onClickFilter={this.clickFilter} />
                </div>
                <TodoList 
                    todos={todoDatadone ? todoDatadone : todoData}
                    onDeleted={ this.deleteItem } 
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    };
};