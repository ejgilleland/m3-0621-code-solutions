import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
      .catch(err => console.error('err: ', err));
  }

  addTodo(newTodo) {
    const todoInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    };
    fetch('/api/todos', todoInit)
      .then(res => {
        if (res.status === 201) {
          res.json()
            .then(data => {
              this.setState(state => ({
                todos: state.todos.concat([data])
              }));
            });
        }
      });
  }

  toggleCompleted(todoId) {
    const currentStatus = this.state.todos[todoId - 1].isCompleted;
    const toggleCompleted = { isCompleted: !currentStatus };
    const toggleInit = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toggleCompleted)
    };
    fetch(`/api/todos/${todoId}`, toggleInit)
      .then(res => {
        if (res.status === 200) {
          res.json()
            .then(data => {
              this.setState(state => {
                return (state.todos[todoId - 1] = data);
              });
            });
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
