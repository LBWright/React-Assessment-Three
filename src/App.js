import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Todos, { TodoList, NewTodoForm, Todo } from './components/Todo';

class App extends Component {
  renderTodos = () => (
    <Todos>
      {({ todos, addTodo, completeTodo, deleteTodo }) => (
        <Fragment>
          <NewTodoForm addTodo={addTodo} />
          <TodoList
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            todos={todos}
          />
        </Fragment>
      )}
    </Todos>
  );
  renderTodo = props => (
    <Todos>
      {({ todos, deleteTodo, completeTodo, updateTodo }) => (
        <Todo
          {...props}
          todos={todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          updateTodo={updateTodo}
        />
      )}
    </Todos>
  );
  render() {
    return (
      <div>
        <Route exact path="/" render={this.renderTodos} />
        <Route path="/:id" render={this.renderTodo} />
      </div>
    );
  }
}

export default App;
