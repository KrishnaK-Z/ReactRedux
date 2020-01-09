import React, {Component} from 'react';
import Todo from './Todo';

export default class TodoLists extends Component {
  render() {
    return (
      <div className="todo-lists">
        {/* for each */}
          <Todo/>
      </div>
    );
  }
}