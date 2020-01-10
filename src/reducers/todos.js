import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    ADD_LIST,
    DELETE_LIST,
    EDIT_LIST,
    COMPLETE_LIST,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED
} from '../constants/todo';

import {
    STATUS_OPEN,
    STATUS_COMPLETED
} from '../constants/status';

const initialState = [{
    id: 0,
    title: 'Use Redux',
    hastags: "",
    status: STATUS_OPEN,
    lists: [{
        id: 0,
        title: 'First Things First!!!',
        status: STATUS_OPEN
    }]
}];

export default function Todos(state = initialState, action) {
    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => {
                        return Math.max(todo.id, maxId)
                    }, -1) + 1,
                    title: action.title,
                    hastags: "",
                    status: STATUS_OPEN,
                    lists: []
                }

            ];

        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.todoId
            );

        case EDIT_TODO:
            return state.map(todo =>
                todo.id === action.todoId ? {...todo, title: action.title } :
                todo
            );

        case ADD_LIST:
            return state.map(todo =>
                todo.id === action.todoId ? {...todo,
                    lists: (function() {
                        var lists = todo.lists;
                        return [
                            ...lists,
                            {
                                id: lists.reduce((maxId, list) => {
                                    return Math.max(list.id, maxId)
                                }, -1) + 1,
                                title: action.listTitle,
                                status: STATUS_OPEN
                            }
                        ];
                    })()
                } :
                todo
            );

        default:
            return state;
    }
};