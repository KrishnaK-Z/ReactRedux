import React, {Component} from 'react';
import List from './List';
import PropTypes from 'prop-types';


export default class ListSlides extends Component {

  static propTypes = {
    lists: PropTypes.array.isRequired,
    todoId: PropTypes.number.isRequired,
    deleteList: PropTypes.func,
    editList: PropTypes.func,
    changeListStatus: PropTypes.func,
  }

  render() {
    const {lists, todoId, deleteList, editList, changeListStatus} = this.props;
    
    return (
      <div className="list-slide">
        <ul className="list">
        {
          lists.map((list, index, lists) => (
            <List key={list.id} list={list} todoId={todoId} deleteList={deleteList} editList={editList} changeListStatus={changeListStatus} />
          ))
        }
        </ul>
      </div>
    );
    
  }
}
