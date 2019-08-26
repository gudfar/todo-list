import React, {Component} from 'react';

import './css/item-add-form.css'

export default class AddItem extends Component{

    state = {
        'addText': ''
    };

    onChangeText = (addText) => {
        this.setState({addText});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.addText);
        this.setState({addText: ''});
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => this.onChangeText(e.target.value)}
                    placeholder="What needs to be done?"
                    value={this.state.addText}
                />
                <button className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        );
    }

}