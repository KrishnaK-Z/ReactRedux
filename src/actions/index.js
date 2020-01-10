import * as types from '../constants/todo';

export const addTodo = (title) => ({ type: types.ADD_TODO, title });
export const deleteTodo = (id) => ({ type: types.DELETE_TODO, id });
export const changeStatusTodo = (id, status) => ({ type: types.SET_STATUS_FILTER, id, status });
export const editTodo = (id, title) => ({ type: types.EDIT_TODO, id, title });