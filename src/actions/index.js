import * as types from '../constants/todo';

export const addTodo = (title) => ({ type: types.ADD_TODO, title });
export const deleteTodo = (todoId) => ({ type: types.DELETE_TODO, todoId });
export const changeStatusTodo = (id, status) => ({ type: types.SET_STATUS_FILTER, id, status });
export const editTodo = (id, title) => ({ type: types.EDIT_TODO, id, title });
export const addList = (todoId, title) => ({ type: types.ADD_LIST, todoId, title });
export const deleteList = (todoId, listId) => ({ type: types.DELETE_LIST, todoId, listId });
export const editList = (todoId, listId, title) => ({ type: types.EDIT_LIST, todoId, listId, title });
export const changeTodoStatus = (todoId, status) => ({ type: types.CHANGE_TODO_STATUS, todoId, status });
export const changeListStatus = (todoId, listId, status) => ({ type: types.CHANGE_LIST_STATUS, todoId, listId, status });