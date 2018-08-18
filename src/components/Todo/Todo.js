import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Button, Input, TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

import { fetchSingleTodo } from '../../actions';

class Todo extends Component {
  // all of these items are kept on state to
  // make it easier update the state in CDU method
  state = {
    id: 0,
    title: '',
    description: '',
    completed: false
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    fetchSingleTodo: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    todo: PropTypes.object
  };

  componentDidUpdate(prevProps) {
    if (prevProps.todos !== this.props.todos) {
      const { id } = this.props.match.params;
      this.props.fetchSingleTodo(id);
    } else if (prevProps.todo !== this.props.todo && this.props.todo) {
      this.setState({
        title: this.props.todo.title,
        description: this.props.todo.description,
        completed: this.props.todo.completed,
        id: this.props.todo.id
      });
    }
  }

  handleDelete = () => {
    const { id } = this.props.todo;
    this.props.deleteTodo(id);
    this.props.history.push('/');
  };

  handleSubmit = event => {
    event.preventDefault();
    const todo = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      completed: this.state.completed
    };
    this.props.updateTodo(todo);
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    if (this.props.fetching) {
      return <h3>Loading...</h3>;
    } else if (!this.props.todo) {
      return (
        <div>
          <Link to="/">Back to Home</Link>
          <h3>404: This Todo was not found</h3>
        </div>
      );
    }
    const {
      todo: { id, completed },
      completeTodo
    } = this.props;
    return (
      <div>
        <Link style={styles.link} to="/">
          &lt; Back to Tasks
        </Link>
        <form style={styles.view} onSubmit={this.handleSubmit}>
          <div style={styles.margin} className="add-todo">
            <Input
              name="title"
              value={this.state.title}
              type="text"
              onChange={this.handleInput}
              style={completed ? styles.completed : null}
            />
            <Button
              styles={styles.button.complete}
              disabled={completed}
              onClick={() => {
                completeTodo(id);
              }}
            >
              Complete
            </Button>
          </div>
          <TextField
            name="description"
            value={this.state.description}
            type="text"
            onChange={this.handleInput}
            placeholder="Description"
            style={styles.textField}
          />
          <div className="button-group">
            <Button
              style={styles.button.save}
              variant="contained"
              type="submit"
            >
              Save
            </Button>
            <Button
              onClick={() => this.props.history.push('/')}
              style={styles.button.cancel}
            >
              Cancel
            </Button>
            <Button style={styles.button.delete} onClick={this.handleDelete}>
              Delete
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo,
  todos: state.todos,
  fetching: state.fetching
});
export default withRouter(
  connect(
    mapStateToProps,
    { fetchSingleTodo }
  )(Todo)
);

const styles = {
  completed: {
    textDecoration: 'line-through'
  },
  textField: {
    margin: '20px 0',
    width: '600px'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    save: {
      marginRight: '20px',
      color: 'white',
      background: '#2196f3'
    },
    cancel: {
      margin: '20px',
      color: 'black',
      background: '#E0E0E0'
    },
    delete: {
      margin: '20px',
      color: 'white',
      background: '#EF5350'
    },
    complete: {
      margin: '20px',
      color: 'black',
      background: '#E0E0E0'
    }
  }
};
