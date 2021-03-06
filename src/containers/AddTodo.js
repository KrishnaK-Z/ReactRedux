import { connect } from 'react-redux';
import AddTodo from '../components/MainSection/Todo/AddTodo';
import { addTodo } from '../actions';

export default connect(null, { addTodo })(AddTodo);
