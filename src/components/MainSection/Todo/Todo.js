import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faTrashAlt,faAngleDown } from '@fortawesome/fontawesome-free-solid';
import ListsSlide from './ListsSlide';
import Slider from "react-slick";
import PropTypes from 'prop-types';

export default class Todo extends Component {

  constructor() {
    super();
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  }

  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    changeStatusTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
  }

  render() {
    const { todo, changeStatusTodo, deleteTodo, editTodo } = this.props

    return (
      <div className="todo">
          <div className="left-side">
              <div className="icon-container">
                  <FontAwesomeIcon icon={faListUl}/>
              </div>
          </div>
          <div className="right-side">
              <div className="todo-header">
                <h1 className="todo-title">{todo.title}</h1>
                <div className="todo-action">
                    <div className="status-selector">
                      <select className="select__input select-status" name="selectStatus" id="selectStatus">
                        <option value="0">Select option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                      </select>

                      {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                    </div>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
              </div>
              <div className="list-slides-container">
                <Slider {...this.settings}>
                  {/* for each */}
                    <ListsSlide/>
                </Slider>
              </div>
          </div>
      </div>
    );
  }
}
