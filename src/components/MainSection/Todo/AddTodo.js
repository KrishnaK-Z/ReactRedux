import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';

export default class AddTodo extends Component {
  render() {
    return (
      <div className="add-todo">
          <input type="text" id="new-todo" className="new-todo" placeholder="Write a note or paste a link"/>
          <button className="new-todo-btn">
            <FontAwesomeIcon icon={faPlus}/>
          </button>
      </div>
    );
  }
}
