import React from 'react';
import InputForm from './InputForm';
import ItemsList from './ItemsList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this.removeItem);
    }
    addItem(item) {
        const items = this.state.items;
        items.push(item);
        this.setState({ items });
    }
    render() {
        return (
            <div className="wrap__page">
                <div className="wrap__list">
                    <ItemsList items={ this.state.items } />
                </div>
                <InputForm addItem={ this.addItem } />
            </div>
        )
    }
}

export default App;