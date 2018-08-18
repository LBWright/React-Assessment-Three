import React, { Component } from 'react';
import { Input, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

class NewTodoForm extends Component {
  state = {
    title: '',
    description: ''
  };

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const todo = {
      title: this.state.title,
      completed: false
    };

    this.props.addTodo(todo);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <h1>Add a ToDo:</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}
            placeholder="Add a Todo"
          />
          <Button style={styles.button}>Add New</Button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;

const styles = {
  button: {
    color: 'white',
    background: '#2196F3',
    margin: '0 20px'
  }
};
