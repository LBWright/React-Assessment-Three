import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTodoRequest,
  completeTodoRequest,
  fetchTodosRequest,
  deleteTodoRequest
} from '../../actions';
import PropTypes from 'prop-types';

class Todos extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
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

  render() {
    const todos = {
      todos: this.props.todos,
      addTodo: this.addTodo,
      completeTodo: this.completeTodo,
      deleteTodo: this.deleteTodo
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
  { addTodoRequest, completeTodoRequest, fetchTodosRequest, deleteTodoRequest }
)(Todos);
