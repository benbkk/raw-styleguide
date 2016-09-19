/**
*
* H2
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const H2 = (props) =>
  <h2 className={styles.h2}>
    {props.children}
  </h2>;

H2.propTypes = {
  children: PropTypes.node,
};

export default H2;
