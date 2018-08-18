import { put, takeEvery, call, all } from 'redux-saga/effects';

import * as TYPES from '../actions/types';
import { fetchData, postData, patchData, deleteData, putData } from './Api';

// Watcher Sagas
export function* watchFetchTodos() {
  yield takeEvery(TYPES.FETCH_TODOS_REQUEST, fetchTodos);
}

export function* watchFetchSingleTodo() {
  yield takeEvery(TYPES.FETCH_SINGLE_REQUEST, fetchSingleTodo);
}

export function* watchAddTodo() {
  yield takeEvery(TYPES.ADD_TODO_REQUEST, addTodo);
}

export function* watchCompleteTodo() {
  yield takeEvery(TYPES.COMPLETE_TODO_REQUEST, completeTodo);
}

export function* watchDeleteTodo() {
  yield takeEvery(TYPES.DELETE_TODO_REQUEST, deleteTodo);
}

export function* watchUpdateTodo() {
  yield takeEvery(TYPES.UPDATE_TODO_REQUEST, updateTodo);
}

// Worker Sagas
function* fetchTodos(action) {
  try {
    const data = yield call(fetchData);
    yield put({ type: TYPES.FETCH_TODOS_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TYPES.ERROR, error });
  }
}

function* fetchSingleTodo(action) {
  yield put({ type: TYPES.FETCH_SINGLE_SUCCESS, payload: action.payload });
}

function* addTodo(action) {
  try {
    const data = yield call(postData, action.payload);
    yield put({ type: TYPES.ADD_TODO_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TYPES.ERROR, error });
  }
}

function* completeTodo(action) {
  try {
    const data = yield call(putData, action.payload);
    yield put({ type: TYPES.COMPLETE_TODO_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TYPES.ERROR, error });
  }
}

function* updateTodo(action) {
  try {
    console.log('logging action inside of saga', action);
    const data = yield call(patchData, action.payload);
    yield put({ type: TYPES.UPDATE_TODO_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TYPES.ERROR, error });
  }
}

function* deleteTodo(action) {
  try {
    const data = yield call(deleteData, action.payload);
    yield put({ type: TYPES.DELETE_TODO_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TYPES.ERROR, error });
  }
}

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddTodo(),
    watchCompleteTodo(),
    watchDeleteTodo(),
    watchUpdateTodo(),
    watchFetchSingleTodo()
  ]);
}
