import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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

AllTodosPage.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default AllTodosPage;
