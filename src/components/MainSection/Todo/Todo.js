import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faTrashAlt, faPlus, faUndoAlt } from '@fortawesome/fontawesome-free-solid';
import ListsSlide from './ListsSlide';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import Select from 'react-select';
import chunk from 'lodash.chunk';
 
const options = [
  { value: 'STATUS_OPEN', label: 'Open' },
  { value: 'STATUS_COMPLETED', label: 'Completed' },
  { value: 'STATUS_ONREVIEW', label: 'Review' },
];

const statusSelectStyles = {
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
  singleValue: (styles, { data }) => ({
    ...styles,
        color: '#F1F1F1'
    }),
  };

export default class Todo extends Component {

  constructor() {
    super();
  }

  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    changeStatusTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteList: PropTypes.func.isRequired,
    editList: PropTypes.func.isRequired,
    changeTodoStatus: PropTypes.func.isRequired,
    changeListStatus: PropTypes.func.isRequired,
  }

  state = {
    selectedOption: null,
    editing: false
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.changeTodoStatus(this.props.todo.id, selectedOption.value);
  };

  createChunkLists = (lists, size = 3) => {
    return chunk(lists, size);
  };

  selectedStatus = () => {
    options.filter(option => (
      option.value == this.props.todo.status
    ));
  }

  render() {
    const { selectedOption, editing } = this.state;
    const { todo, changeStatusTodo, deleteTodo, editTodo, addList, deleteList, editList, changeListStatus } = this.props;
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
                            defaultValue={this.selectedStatus}
                            styles={statusSelectStyles}
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
                      <ListsSlide key={todo.id + "slide" + index} lists={list} todoId={todo.id} deleteList={deleteList} editList={editList} changeListStatus={changeListStatus} />
                    ))
                  }
                </Slider>
              </div>
          </div>
      </div>
    );
  }
}
