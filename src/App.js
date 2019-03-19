import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello from app
        <TodoList />
        <TodoInput />
        <TodoItem />
      </div>
    );
  }
}

export default App;
