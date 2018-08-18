import * as TYPES from '../actions/types';

const initialState = {
  todos: [],
  todo: {},
  error: {},
  fetching: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_TODOS_REQUEST:
      return { ...state, fetching: true };
    case TYPES.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        fetching: false,
        todos: action.payload
      };
    case TYPES.ADD_TODO_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case TYPES.ADD_TODO_SUCCESS:
      return {
        ...state,
        fetching: false,
        todos: action.payload
      };
    case TYPES.COMPLETE_TODO_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case TYPES.COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        fetching: false,
        todos: action.payload
      };
    case TYPES.DELETE_TODO_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case TYPES.DELETE_TODO_SUCCESS:
      return {
        ...state,
        fetching: false,
        todos: action.payload
      };
    case TYPES.UPDATE_TODO_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case TYPES.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        fetching: false,
        todos: action.payload
      };
    case TYPES.FETCH_SINGLE_REQUEST:
      return { ...state, fetching: true };
    case TYPES.FETCH_SINGLE_SUCCESS:
      let singleTodoArray = state.todos.filter(
        todo => todo.id.toString() === action.payload
      );
      return {
        ...state,
        todo: singleTodoArray[0],
        fetching: false
      };
    case TYPES.ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error.message
      };
    default:
      return state;
  }
}

export default rootReducer;
