import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodoRequest,
  completeTodoRequest,
  fetchTodosRequest,
  deleteTodoRequest,
  updateTodoRequest
} from '../../actions';
import PropTypes from 'prop-types';

class Todos extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    addTodoRequest: PropTypes.func.isRequired,
    updateTodoRequest: PropTypes.func.isRequired,
    deleteTodoRequest: PropTypes.func.isRequired,
    fetchTodosRequest: PropTypes.func.isRequired,
    completeTodoRequest: PropTypes.func.isRequired
  };
  state = {
    todos: []
  };

  componentDidMount() {
    this.props.fetchTodosRequest();
  }

  addTodo = todo => {
    this.props.addTodoRequest(todo);
  };

  completeTodo = id => {
    this.props.completeTodoRequest(id);
  };

  deleteTodo = id => {
    this.props.deleteTodoRequest(id);
  };

  updateTodo = todo => {
    this.props.updateTodoRequest(todo);
  };

  render() {
    const todos = {
      todos: this.props.todos,
      addTodo: this.addTodo,
      completeTodo: this.completeTodo,
      deleteTodo: this.deleteTodo,
      updateTodo: this.updateTodo
    };
    const { children } = this.props;
    return children(todos);
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  {
    addTodoRequest,
    completeTodoRequest,
    fetchTodosRequest,
    deleteTodoRequest,
    updateTodoRequest
  }
)(Todos);
