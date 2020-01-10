import React, {Component} from 'react';
import TodoInput from './TodoInput';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/fontawesome-free-solid';

// May need to be changed
export default class AddTodo extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="add-todo">
          <TodoInput
          newTodo
          placeholder = "Write a note or paste a link"
          onSave = {(text) => {
            if (text.length !== 0) {
              this.props.addTodo(text);
            }
          }}
          />
          <button className="new-todo-btn">
            <FontAwesomeIcon icon={faExpand}/>
          </button>
      </div>
    );
  }
}
