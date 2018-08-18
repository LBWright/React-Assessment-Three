import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const TodoListItem = ({
  id,
  title,
  completed,
  description,
  completeTodo,
  deleteTodo
}) => {
  return (
    <div style={styles.container}>
      <Link style={styles.link} to={`/${id}`}>
        <h4 style={completed ? styles.completed : null}>{title}</h4>
      </Link>
      <div style={{ alignSelf: 'center' }} className="buttons">
        <Button
          disabled={completed}
          onClick={() => {
            completeTodo(id);
          }}
        >
          Complete
        </Button>
        <Button style={styles.button.delete} onClick={() => deleteTodo(id)}>
          X
        </Button>
      </div>
    </div>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoListItem;

const styles = {
  container: {
    display: 'flex',
    height: '50px',
    margin: '0 auto',
    justifyContent: 'space-between'
  },
  completed: {
    textDecoration: 'line-through'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  button: {
    delete: {
      margin: '10px',
      color: 'white',
      background: '#EF5350'
    }
  }
};
