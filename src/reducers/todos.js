import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    ADD_LIST,
    DELETE_LIST,
    EDIT_LIST,
    CHANGE_LIST_STATUS,
    CHANGE_TODO_STATUS
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
        status: false
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

        case CHANGE_TODO_STATUS:
            return state.map(todo =>
                todo.id === action.todoId ? {...todo, status: action.status } :
                todo
            );

        case DELETE_LIST:
            return state.map(todo =>
                todo.id === action.todoId ? {...todo,
                    lists: (function() {
                        var lists = todo.lists;
                        return lists.filter(list =>
                            list.id !== action.listId
                        );
                    })()
                } :
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
                                title: action.title,
                                status: false
                            }
                        ];
                    })()
                } :
                todo
            );

        case EDIT_LIST:
            return state.map(todo =>
                todo.id === action.todoId ? {...todo,
                    lists: (function() {
                        var lists = todo.lists;
                        return lists.map(list =>
                            list.id === action.listId ? {...list, title: action.title } :
                            list
                        );
                    })()
                } :
                todo
            );

        case CHANGE_LIST_STATUS:
            return state.map(todo =>
                todo.id === action.todoId ? {...todo,
                    lists: (function() {
                        var lists = todo.lists;
                        return lists.map(list =>
                            list.id === action.listId ? {...list, status: action.status } :
                            list
                        );
                    })()
                } :
                todo
            );

        default:
            return state;
    }
};