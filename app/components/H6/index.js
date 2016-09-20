/**
*
* H6
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const H6 = (props) =>
  <h6 className={styles.h6} {...props}>
    {props.children}
  </h6>;

H6.propTypes = {
  children: PropTypes.node,
};

export default H6;
