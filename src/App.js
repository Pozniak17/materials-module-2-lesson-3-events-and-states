import React, { Component } from 'react';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from 'components/TodoList';
import initialTodos from './json/Todo.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    // const completedTodos = todos.find(todo => todo.completed);

    // ми кажемо, якщо todo.completed є, то треба повернути total + 1, якщо немає то просто total (який дорівнює 0)
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <h1>Состояние компонента</h1>

        <Counter />

        <ColorPicker options={colorPickerOptions} />
        <Dropdown />
        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodosCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
