import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faSignOutAlt } from '@fortawesome/fontawesome-free-solid';

export default class Settings extends Component {
    render() {
        return (
            <div className="setting-container">
                <FontAwesomeIcon icon={faCog} />
                <ul class="setting-menu">
                    <li><FontAwesomeIcon icon={faUser} />Profile</li>
                    <li><FontAwesomeIcon icon={faSignOutAlt} />Sign Out</li>
                </ul>
            </div>
          );
    }
}
