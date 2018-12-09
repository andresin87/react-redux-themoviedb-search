import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './DetailInfoHomeButton.module.css';

class DetailInfoHomeButton extends PureComponent {
  render() {
    return (
      <NavLink
        to="/"
        className={styles['DetailInfoHomeButton']}
        style={{ color: 'white' }}
      >
        Home
      </NavLink>
    );
  }
}

export default DetailInfoHomeButton;
