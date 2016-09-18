/**
*
* H4
*
*/

import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

const H4 = (props) =>
  <h4 className={styles.h4}>
    {props.title}
    {Children.toArray(props.children)}
  </h4>;

H4.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

H4.defaultProps = {
  title: 'Headline 4',
};

export default H4;
