import React, { Component, Fragment } from 'react';
import Todos, { TodoList, NewTodoForm } from './components/Todo';

class App extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
