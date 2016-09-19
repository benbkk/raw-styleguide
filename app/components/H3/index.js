/**
*
* H3
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const H3 = (props) =>
  <h3 className={styles.h3}>
    {props.children}
  </h3>;

H3.propTypes = {
  children: PropTypes.node,
};

export default H3;
