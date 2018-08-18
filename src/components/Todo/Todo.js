import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { fetchSingleTodo } from '../../actions';

class Todo extends Component {
  state = {
    title: '',
    description: ''
  };

  componentDidUpdate(prevProps) {
    if (prevProps.todos !== this.props.todos) {
      const { id } = this.props.match.params;
      this.props.fetchSingleTodo(id);
    } else if (prevProps.todo !== this.props.todo && this.props.todo) {
      this.setState({
        title: this.props.todo.title,
        description: this.props.todo.description
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
      title: this.state.title,
      description: this.state.description
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
      todo: { id, title, description, completed },
      completeTodo
    } = this.props;
    return (
      <div>
        <Link to="/">Back to Tasks</Link>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            value={this.state.title}
            type="text"
            onChange={this.handleInput}
          />
          <textarea
            name="description"
            value={this.state.description}
            type="text"
            onChange={this.handleInput}
            placeholder="Description"
          />
          <Button color="primary" variant="contained" type="submit">
            Save
          </Button>
          <Button
            disabled={completed}
            onClick={() => {
              completeTodo(id);
            }}
          >
            Complete
          </Button>
          <Button onClick={this.handleDelete}>Delete</Button>
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
