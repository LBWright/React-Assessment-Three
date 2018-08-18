import React from 'react';

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
      <h4>{title}</h4>
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
