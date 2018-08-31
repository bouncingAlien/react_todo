import React from 'react';

class InputFrom extends React.Component {
    constructor() {
        super();
        this.createItem = this.createItem.bind(this);
    }
    nameRef = React.createRef();
    createItem(e){
        e.preventDefault();
        const item = {
            name: this.nameRef.current.value,
        }
        this.props.addItem(item);
        e.currentTarget.reset();
    }
    render() {
        return (
            <form className="inputForm" onSubmit={this.createItem}>
                <input type="text" className="inputForm__item" name="name" ref={ this.nameRef } />
                <button type="submit" className="inputForm__addButton">+ Add</button>
            </form>
        )
    }
}

export default InputFrom;