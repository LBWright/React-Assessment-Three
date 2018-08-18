import React from 'react';
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

export default TodoList;
