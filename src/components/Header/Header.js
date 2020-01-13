import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faPlusSquare } from '@fortawesome/fontawesome-free-solid';
import Settings from './Settings';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
              <div className="header-container">
                  <form className="search-form">
                      <fieldset>
                          <div className="inner-form">
                              <div className="input-field">
                                  <button className="btn-search" type="button">
                                      <FontAwesomeIcon icon={faSearch} />
                                  </button>
                                  <input id="search" type="text" placeholder="search anything"/>
                              </div>
                          </div>
                      </fieldset>
                  </form>
                  <div className="settings">
                      <ul>
                          <li><FontAwesomeIcon icon={faPlusSquare} /></li>
                          <li><FontAwesomeIcon icon={faBell} /></li>
                          <li>
                              <Settings/>
                          </li>
                      </ul>
                  </div>
              </div>
            </header>
          );
    }
}
