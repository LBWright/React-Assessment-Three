import React, { Fragment } from 'react';
import Todos, { TodoList, NewTodoForm } from '../Todo';

const AllTodosPage = props => {
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
};

export default AllTodosPage;
