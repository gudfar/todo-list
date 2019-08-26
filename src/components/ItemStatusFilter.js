import React, {Component} from 'react';

import './css/item-status-filter.css';
import classnames from "classnames";

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'all'},
        {name: 'important', label: 'important'},
        {name: 'done', label: 'done'},
    ];

    render() {
        return (
            <div className="btn-group">
                { this.buttons.map(({name, label}) => {
                    const filter = !this.props.filterProperty ? 'all' : this.props.filterProperty;
                    const isActive = filter === name;
                    const classNames = classnames({
                        'btn': true,
                        'btn-info': isActive,
                        'btn-outline-secondary': !isActive
                    });

                    label = label.charAt(0).toUpperCase() + label.slice(1);

                    if (name === 'all') {
                        return <button onClick={() => this.props.onFilterChange('', '')} type="button" className={classNames}>{ label }</button>;
                    }
                    return <button onClick={() => this.props.onFilterChange(name, true)} type="button" className={classNames}>{ label }</button>
                })};
            </div>
        );
    }
}