import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import TodoLists from '../components/MainSection/Todo/TodoLists';
import { getFilteredTodos } from '../selectors';

const mapStateToProps = state => (
    {
        filteredTodos: getFilteredTodos(state)
    }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

const TodoLists = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoLists);

export default TodoLists;
