/**
*
* AppHeader
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const AppHeader = (props) =>
  <header className={styles.appHeader}>
    {props.children}
  </header>;

AppHeader.propTypes = {
  children: PropTypes.node,
};

export default AppHeader;
