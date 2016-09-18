/**
*
* H3
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const H3 = (props) =>
  <h3 className={styles.h3}>
    {props.title}
    {props.children}
  </h3>;

H3.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

H3.defaultProps = {
  title: 'Headline 3',
};

export default H3;
