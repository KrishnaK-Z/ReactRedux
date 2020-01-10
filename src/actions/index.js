import * as types from '../constants/todo';

export const addTodo = (title) => ({ type: types.ADD_TODO, title });
export const deleteTodo = (todoId) => ({ type: types.DELETE_TODO, todoId });
export const changeStatusTodo = (id, status) => ({ type: types.SET_STATUS_FILTER, id, status });
export const editTodo = (id, title) => ({ type: types.EDIT_TODO, id, title });