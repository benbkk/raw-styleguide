/**
*
* Logo
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import { IndexLink } from 'react-router';

const Logo = (props) =>
  <IndexLink to={props.href} className={styles.appLogo}>
    <span className={styles.srOnly}>{props.logoText}</span>
  </IndexLink>;

Logo.propTypes = {
  href: PropTypes.string,
  logoText: PropTypes.string,
};

Logo.defaultProps = {
  logoText: 'Rawpixel',
  href: '/',
};

export default Logo;
