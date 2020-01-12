import React, {Component} from 'react';

export default class List extends Component {
    render() {
        const {list, todoId} = this.props;
        
        return (
            <ul className="list">
                <li className="list-item">
                    <input type="checkbox" id={todoId + "-list-" + list.id} className="hidden-box" defaultChecked/>
                    <label htmlFor={todoId + list.id} className="check--label">
                        <span className="check--label-box"></span>
                        <span className="check--label-text">{list.title}</span>
                    </label>
                </li>
            </ul>
        );
    }
}
