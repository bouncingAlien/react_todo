import React from 'react';

class Item extends React.Component {
    constructor(){
        super();
        this.itemClick = this.itemClick.bind(this);
    }
    itemClick(e){
        this.props.removeItem(this.props.item);
    }
    render() {
        return (
            <li className="item" >
                <input type="checkbox" name="important" className="item__important"/>
                <p className="item__name" onClick={ this.itemClick }>{ this.props.item.name }</p>
                <button onClick={ this.itemClick }>DONE</button>
            </li>
        )
    }
}

export default Item;