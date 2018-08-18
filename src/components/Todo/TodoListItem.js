import React from 'react';
import { Link } from 'react-router-dom';

const TodoListItem = ({
  id,
  title,
  completed,
  description,
  completeTodo,
  deleteTodo
}) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <h4>{title}</h4>
      </Link>
      <button
        disabled={completed}
        onClick={() => {
          completeTodo(id);
        }}
      >
        Complete
      </button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoListItem;
