import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/fontawesome-free-solid';

export default class Notification extends Component {
    render() {
        return (
            <div className="notification-container">
                <FontAwesomeIcon icon={faBell} />
            </div>
          );
    }
}
