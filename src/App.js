import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

class App extends Component {
  state = {
    items:
      [
        { id: 1, title: 'wake up' },
        { id: 2, title: 'Make Breakfast' }
      ],
    id: uuid(),
    item: '',
    editItem: false
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  clearList = () => { console.log('Clear list') }
  handleDelete = (id) => { console.log(`handle delete ${id}`) }
  handleEdit = (id) => { console.log(`handle edit ${id}`) }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoItem />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
