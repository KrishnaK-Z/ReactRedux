import { combineReducers } from 'redux';
import Todos from './todos';
import StatusFilter from './statusFilter';

const RootReducers = combineReducers({
    Todos,
    StatusFilter
});

export default RootReducers;