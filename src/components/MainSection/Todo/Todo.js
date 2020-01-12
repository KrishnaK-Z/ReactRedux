import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faTrashAlt, faPlus, faUndoAlt } from '@fortawesome/fontawesome-free-solid';
import ListsSlide from './ListsSlide';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import Select from 'react-select';
import chunk from 'lodash.chunk';
 
const options = [
  { value: 'open', label: 'Open' },
  { value: 'completed', label: 'Completed' },
  { value: 'under review', label: 'Review' },
];

const colourStyles = {
  control: styles => (
      { 
          ...styles, 
          backgroundColor: '#202020', 
          color: '#F1F1F1',
          borderColor: '#282828',
          padding: '0.3em 0em',
          ':hover': {
              borderColor: '#282828'
          }
      }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
          ...styles,
          color: '#282828'
      };
      },
  };

export default class Todo extends Component {

  constructor() {
    super();
  }

  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    changeStatusTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
  }

  state = {
    selectedOption: null,
    editing: false
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  createChunkLists = (lists, size = 3) => {
    return chunk(lists, size);
  };

  render() {
    const { selectedOption, editing } = this.state;
    const { todo, changeStatusTodo, deleteTodo, editTodo, addList } = this.props;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }, 
    chunk = 3;
    
    return (
      <div className="todo" id={todo.id}>
          <div className="left-side">
              <div className="icon-container">
                  <FontAwesomeIcon icon={faListUl}/>
              </div>
          </div>
          <div className="right-side">
              <div className="todo-header">
                <div className="todo-title-header">
                  <h1 className="todo-title">{todo.title}</h1>
                </div>
                <div className="todo-action">
                  <div className="status-selector">
                    <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            styles={colourStyles}
                          />
                  </div>
                  <FontAwesomeIcon icon={faPlus} onClick={() => addList(todo.id, "New List")}/>
                  <FontAwesomeIcon icon={faUndoAlt} />
                  <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTodo(todo.id)}/>
                </div>
              </div>
              <div className="list-slides-container">
                <Slider {...settings}>
                  {
                    this.createChunkLists(todo.lists, chunk).map((list, index, lists) => (
                      <ListsSlide key={todo.id + "slide" + index} lists={list} todoId={todo.id}/>
                    ))
                  }
                </Slider>
              </div>
          </div>
      </div>
    );
  }
}
