import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './DetailInfoHomeButton.css';

class DetailInfoHomeButton extends PureComponent {
  render() {
    return (
      <NavLink
        to="/"
        activeClassName="DetailInfoHomeButton"
        style={{ color: 'white' }}
      >
        Home
      </NavLink>
    );
  }
}

export default DetailInfoHomeButton;
