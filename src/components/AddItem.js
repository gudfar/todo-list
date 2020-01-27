import React, {useState} from 'react';

import './css/item-add-form.css'

const AddItem = (props) => {
    const [text, setText] = useState('');

    const onChangeText = (text) => {
        setText(text);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAddItem(text);
        setText('');
    };

    return (
        <form className="item-add-form d-flex" onSubmit={onSubmit}>
            <input
                type="text"
                className="form-control"
                onChange={(e) => onChangeText(e.target.value)}
                placeholder="What needs to be done?"
                value={text}
            />
            <button className="btn btn-outline-secondary">
                Add item
            </button>
        </form>
    );
};

export default AddItem;