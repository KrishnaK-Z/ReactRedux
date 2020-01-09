import { SET_STATUS_FILTER } from '../constants/todo';
import { STATUS_OPEN } from '../constants/status';

const StatusFilter = (state = STATUS_OPEN, action) => {
    switch (action.type) {
        case SET_STATUS_FILTER:
            return action.filter
        default:
            return state
    }
};

export default StatusFilter;