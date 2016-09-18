/**
*
* H5
*
*/

import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

const H5 = (props) =>
  <h5 className={styles.h5}>
    {props.title}
    {Children.toArray(props.children)}
  </h5>;

H5.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

H5.defaultProps = {
  title: 'Headline 5',
};

export default H5;
