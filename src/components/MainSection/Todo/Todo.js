import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import ListsSlide from './ListsSlide';
import Slider from "react-slick";

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

  render() {

    return (
      <div className="todo">
          <div className="left-side">
              <div className="icon-container">
                  <FontAwesomeIcon icon={faListUl}/>
              </div>
          </div>
          <div className="right-side">
              <div className="todo-header">
                <h1 className="todo-title">Todo Title</h1>
                <div className="todo-action">
                    <div className="status-selector">
    
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
