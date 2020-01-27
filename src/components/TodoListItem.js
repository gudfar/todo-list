import React from 'react';
import classnames from 'classnames';

import './css/todo-list-item.css';


const TodoListItem = (props) => {

    const {
        done,
        important,
        text,
        onRemoveItem,
        onToggleDone,
        onToggleImportant
    } = props;

    let classNames = classnames({
        'todo-list-item': true,
        'done': done,
        'important': important
    });

    return (
        <span className={classNames}>
             <span
                 className="todo-list-item-label"
                 onClick={ onToggleDone }
             >
               {text}
             </span>

             <button
                 type="button"
                 className="btn btn-outline-success btn-sm float-right"
                 onClick={ onToggleImportant }
             >
               <i className="fa fa-exclamation" />
             </button>

             <button type="button"
                     className="btn btn-outline-danger btn-sm float-right"
                     onClick={ onRemoveItem }
             >
               <i className="fa fa-trash-o" />
             </button>
          </span>
    );
};

export default TodoListItem;