import React from 'react';
import InputForm from './InputForm';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(item) {
        const items = this.state.items;
        items.push(item);
        this.setState({ items });
    }
    render() {
        return (
            <InputForm addItem={this.addItem} />
        )
    }
}

export default App;