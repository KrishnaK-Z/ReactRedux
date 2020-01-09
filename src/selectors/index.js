import { createSelector } from 'reselect';
import {
    STATUS_OPEN,
    STATUS_ACTIVE,
    STATUS_ONREVIEW,
    STATUS_BACKLOG,
    STATUS_COMPLETED
} from '../constants/status';

const getStatus = state => (state.StatusFilter);
const getTodos = state => (state.Todos);

/**
 * TODO: need to add for all status filters
 */
export const getFilteredTodos = createSelector(
    [getStatus, getTodos],
    (status, todos) => {
        switch (status) {
            case STATUS_OPEN:
                return todos;
            default:
                throw new Error('Unknown filter: ' + status);
        }
    } 
);

export const getCompletedTodoCount = createSelector(
    [getTodos],
    (todos) => {
        todos.reduce((count, todo) => (
            todo.status == STATUS_OPEN ? count + 1 : count
            ), 0)
    }
);