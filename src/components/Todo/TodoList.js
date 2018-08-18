import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  return todos.map(todo => (
    <TodoListItem
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
      key={todo.id}
      {...todo}
    />
  ));
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
