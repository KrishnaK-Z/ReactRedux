import React, { Component } from 'react';
import UserSection from './MainSection/UserSection';
import AddTodo from '../containers/AddTodo';
import TodoLists from '../containers/VisibleTodoLists';
import Filters from './MainSection/Filters';

export default class MainSection extends Component {
  render() {
    return (
      <div className="main-section">
          <UserSection/>
          <AddTodo/>
          <Filters/>
          <TodoLists/>
      </div>
    );
  }
}
