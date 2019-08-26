import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
    AppHeader,
    SearchPanel,
    TodoList,
    ItemStatusFilter,
    AddItem
} from './components'

import './index.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            filterProperty: '',
            filterValue: '',
            items: [
              { id: 1, text: 'Drink Coffee', important: false, done:false },
              { id: 2, text: 'Make Awesome App', important: false, done:false },
              { id: 3, text: 'Have a lunch', important: false, done:false  }
            ]
        };
    }

    onRemoveItem = (id) => {
        this.setState({
            items: this.state.items.filter(i => i.id !== id)
        });
    };

    onAddItem = (text) => {
        this.setState(({items}) => {
            const newItem = {
                id: (!items[items.length - 1]) ? 0 : items[items.length - 1].id + 1,
                text: text,
                important: Math.random() >= 0.5 //random boolean
            };
            return {items: [...items, newItem]};
        });
    };

    toggleProperty (elements, id, property) {
        const idx = elements.findIndex(i => i.id === id);
        const newItems = [...elements];
        newItems[idx][property] = !newItems[idx][property];
        return newItems;
    }

    onToggleImportant = (id) => {
        this.setState(({items}) => {
            return {items: this.toggleProperty(items, id, 'important')};
        })
    };

    onToggleDone = (id) => {
        this.setState(({items}) => {
            return {items: this.toggleProperty(items, id, 'done')};
        })
    };

    onSearchChange = (searchString) => {
        this.setState({ searchString });
    };

    onSearch (items, searchString) {
        if (!searchString.length) {
            return items;
        }
        return items.filter(
            i => i.text.toLowerCase().includes(searchString.toLowerCase())
        );
    };

    onFilterChange = (filterProperty, filterValue) => {
        this.setState({ filterProperty, filterValue });
    };

    onFilter (items, filterProperty, filterValue) {
        if (!filterProperty || !filterValue) {
            return items;
        }
        return items.filter(i => i[filterProperty] === filterValue);
    };


    render() {
        let items = this.onSearch(this.state.items, this.state.searchString);
        items = this.onFilter(items, this.state.filterProperty, this.state.filterValue);
        const doneCount = items.filter(i => i.done).length;
        const todoCount = items.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange = {this.onSearchChange} />
                    <ItemStatusFilter
                        onFilterChange={this.onFilterChange}
                        filterProperty={this.state.filterProperty}
                    />
                </div>
                <TodoList
                    items={items}
                    onRemoveItem={this.onRemoveItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem onAddItem={this.onAddItem}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));