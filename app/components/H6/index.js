/**
*
* H6
*
*/

import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

const H6 = (props) =>
  <h6 className={styles.H6}>
    {props.title}
    {Children.toArray(props.children)}
  </h6>;

H6.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

H6.defaultProps = {
  title: 'Headline 6',
};

export default H6;
