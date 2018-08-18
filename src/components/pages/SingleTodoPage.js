import React from 'react';
import Todos, { Todo } from '../Todo';

const SingleTodoPage = props => {
  return (
    <div>
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
    </div>
  );
};

export default SingleTodoPage;
