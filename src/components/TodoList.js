import React from 'react';

import TodoListItem from './TodoListItem';
import './css/todo-list.css';


const TodoList = (props) => {
  return (
    <ul className="list-group todo-list">
        {props.items.map(({id, ...itemProps}) => {
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem
                        { ...itemProps }
                        onRemoveItem = { () => props.onRemoveItem(id) }
                        onToggleImportant = { () => props.onToggleImportant(id) }
                        onToggleDone = { () => props.onToggleDone(id) }
                    />
                </li>
            );
        })}
    </ul>
  );
};

export default TodoList;



