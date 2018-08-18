import React from 'react';
import PropTypes from 'prop-types';

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

SingleTodoPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default SingleTodoPage;
