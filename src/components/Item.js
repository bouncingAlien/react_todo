import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <li className="item">
                <input type="checkbox" name="important" className="item__important"/>
                <p className="item__name">{ this.props.item.name }</p>
            </li>
        )
    }
}

export default Item;