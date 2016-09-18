/**
*
* H2
*
*/

import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

const H2 = (props) =>
  <h2 className={styles.h2}>
    {props.title}
    {Children.toArray(props.children)}
  </h2>;

H2.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

H2.defaultProps = {
  title: 'Headline 2',
};

export default H2;
