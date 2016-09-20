/**
*
* H5
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const H5 = (props) =>
  <h5 className={styles.h5} {...props}>
    {props.children}
  </h5>;

H5.propTypes = {
  children: PropTypes.node,
};

export default H5;
