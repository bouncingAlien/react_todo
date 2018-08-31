import React from 'react';
import Item from './Item';

class ItemsList extends React.Component {
    render() {
        return (
            <ul className="itemsList">
                { this.props.items.map((item, index) => <Item item={ item } key={ index } />) }
            </ul>
        )
    }
}

export default ItemsList;