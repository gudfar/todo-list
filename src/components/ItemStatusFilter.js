import React from 'react';

import './css/item-status-filter.css';
import classnames from "classnames";

const buttons = [
    {name: 'all', label: 'all'},
    {name: 'important', label: 'important'},
    {name: 'done', label: 'done'},
];


const ItemStatusFilter = (props) => {
    return (
        <div className="btn-group">
            { buttons.map(({name, label}) => {
                const filter = !props.filterProperty ? 'all' : props.filterProperty;
                const isActive = filter === name;
                const classNames = classnames({
                    'btn': true,
                    'btn-info': isActive,
                    'btn-outline-secondary': !isActive
                });

                label = label.charAt(0).toUpperCase() + label.slice(1);

                if (name === 'all') {
                    return <button key={name} onClick={() => props.onFilterChange('', '')} type="button" className={classNames}>{ label }</button>;
                }
                return <button key={name} onClick={() => props.onFilterChange(name, true)} type="button" className={classNames}>{ label }</button>
            })};
        </div>
    );
};


export default ItemStatusFilter;