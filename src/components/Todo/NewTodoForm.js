import React, { Component } from 'react';

class NewTodoForm extends Component {
  state = {
    title: '',
    description: ''
  };

  handleInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const todo = {
      title: this.state.title,
      description: this.state.description,
      completed: false
    };

    this.props.addTodo(todo);
    this.setState({ title: '', description: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleInput}
          placeholder="Add a Todo"
        />
        <textarea
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleInput}
          placholder="Description"
        />
        <button>Add New</button>
      </form>
    );
  }
}

export default NewTodoForm;
