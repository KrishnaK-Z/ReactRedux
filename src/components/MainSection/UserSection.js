import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faShareAlt, faTrashAlt } from '@fortawesome/fontawesome-free-solid';
import Theme from '../Header/Theme';

const UserSection = () => (
  <div className="user-section">
      <div className="user-name">
          <h1>Guest User</h1>
      </div>
      <div className="user-settings">
          <ul>
              <li>
                <Theme/>
              </li>
              <li><FontAwesomeIcon icon={faLanguage} /></li>
              <li><FontAwesomeIcon icon={faShareAlt} /></li>
          </ul>
      </div>
  </div>
);

export default UserSection;
