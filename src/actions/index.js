import * as TYPES from './types';

export const addTodoRequest = todo => {
  console.log('logging my todo inside of the action', todo);
  return { type: TYPES.ADD_TODO_REQUEST, payload: todo };
};

export const completeTodoRequest = id => {
  return { type: TYPES.COMPLETE_TODO_REQUEST, payload: id };
};

export const fetchTodosRequest = () => {
  return { type: TYPES.FETCH_TODOS_REQUEST };
};

export const updateTodoRequest = todo => {
  return { type: TYPES.UPDATE_TODO_REQUEST, payload: todo };
};

export const deleteTodoRequest = id => {
  return { type: TYPES.DELETE_TODO_REQUEST, payload: id };
};
