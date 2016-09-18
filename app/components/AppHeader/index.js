/**
*
* AppHeader
*
*/

import React, { Children, PropTypes } from 'react';
import Logo from 'components/Logo';
import styles from './styles.css';

const AppHeader = (props) =>
  <header className={styles.appHeader} {...props}>
    <Logo />
    {Children.toArray(props.children)}
  </header>;

AppHeader.propTypes = {
  children: PropTypes.node,
};

export default AppHeader;
