import React, {Component} from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

export default class TodoLists extends Component {

  static propTypes = {
    filteredTodos: PropTypes.array,
    actions: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="todo-lists">
        {this.props.filteredTodos.map(todo => 
        <Todo key={todo.id} todo={todo} {...this.props.actions}/>
        )}
          
      </div>
    );
  }
}