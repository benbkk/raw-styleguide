/**
*
* H1
*
*/

/* eslint-disable no-unused-vars */
import React, { PropTypes, Component } from 'react';
import styles from './styles.css';

const H1 = (props) => {
  const { isUpperCase } = PropTypes;
  const headingStyle = props.isUpperCase ? styles.h1UpCase : styles.h1;
  return (
    <h1 className={headingStyle}>
      {props.title}
    </h1>
  );
};

H1.propTypes = {
  title: PropTypes.node,
  isUpperCase: (props, propName, componentName) => {
    Object.assign({}, props);
  },
};

H1.defaultProps = {
  title: 'Headline 1',
};

export default H1;
