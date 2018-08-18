import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { AllTodosPage, SingleTodoPage } from './components/pages';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Route exact path="/" render={props => <AllTodosPage {...props} />} />
        <Route path="/:id" render={props => <SingleTodoPage {...props} />} />
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    boxSizing: 'border-box',
    width: '800px',
    margin: '0 auto'
  }
};
