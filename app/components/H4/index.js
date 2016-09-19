/**
*
* H4
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const H4 = (props) =>
  <h4 className={styles.h4}>
    {props.children}
  </h4>;

H4.propTypes = {
  children: PropTypes.node,
};

export default H4;
