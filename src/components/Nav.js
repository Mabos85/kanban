import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faClipboardList,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className='nav-bar'>
          <span className='home'>
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span className='board'>
            <FontAwesomeIcon icon={faClipboardList} />
          </span>
          <span className='search'>
            <FontAwesomeIcon icon={faSearch} />
          </span>

          <img src='./logo.png' alt='logo' />
        </nav>
      </React.Fragment>
    );
  }
}
export default Nav;
