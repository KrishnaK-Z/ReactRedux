import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/fontawesome-free-solid';
import TodoInput from './TodoInput';

export default class List extends Component {

    static propTypes = {
        list: PropTypes.object.isRequired,
        todoId: PropTypes.number.isRequired,
        deleteList: PropTypes.func,
        editList: PropTypes.func,
    }

    state = {
        editing: false
    };

    editListStatus = () => {
        this.setState({ editing: true });
    };

    handleSave = (todoId, listId, title) => {
        if (title.length === 0) {
            this.props.deleteList(todoId, listId);
        } else {
            this.props.editList(todoId, listId, title);
        }
        this.setState({ editing: false });
    }

    closeEditing = () => {
        this.setState({ editing: false });
    }

    render() {
        const { list, todoId, deleteList } = this.props;
        let element;
        
        if (this.state.editing) {
            element = (
                <TodoInput text={list.title}
                       editing={this.state.editing}
                       onSave={(title) => this.handleSave(todoId, list.id, title)} 
                       onEsec={() => this.closeEditing()} />
            );
        } else {
            element = (
                <li className="list-item">
                    <div className="list-title">
                        <input type="checkbox" id={todoId + "-list-" + list.id} className="hidden-box" defaultChecked/>
                        <label htmlFor={todoId + "-list-" + list.id} className="check--label">
                            <span className="check--label-box"></span>
                            <span className="check--label-text">{list.title}</span>
                        </label>
                    </div>
                    <div className="list-actions">
                    <FontAwesomeIcon icon={faEdit} 
                                        onClick={this.editListStatus} />
                    <FontAwesomeIcon icon={faTrashAlt} 
                                    onClick={() => deleteList(todoId, list.id)}/>
                    </div>
                </li>
            );
        }
        return element;
    }
}