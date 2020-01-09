import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/fontawesome-free-solid';

export default class List extends Component {
    render() {
        return (
            <ul className="list">
                <li className="list-item">
                    <input type="checkbox" id="first" className="hidden-box" defaultChecked/>
                    <label htmlFor="first" className="check--label">
                        <span className="check--label-box"></span>
                        <span className="check--label-text">First List</span>
                    </label>
                </li>
            </ul>
        );
    }
}
