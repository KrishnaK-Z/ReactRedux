import React, { Component } from 'react';
import UserSection from './UserSection/UserSection';
import AddTodo from '../../containers/AddTodo';
import TodoLists from '../../containers/VisibleTodoLists';
import Filters from './Filter/Filters';

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
