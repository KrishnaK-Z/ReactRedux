import React, {Component} from 'react';
import List from './List';
import PropTypes from 'prop-types';


export default class ListSlides extends Component {

  static propTypes = {
    lists: PropTypes.array.isRequired
  }

  render() {
    const {lists, todoId} = this.props;
    return (
      <div className="list-slide">
        {
          lists.map((list, index, lists) => (
            <List key={list.id} list={list} todoId/>
          ))
        }
      </div>
    );
    
  }
}
