import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, completeTodo, deleteTodo }) => {
  console.log('logging inside of todos', todos);
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
