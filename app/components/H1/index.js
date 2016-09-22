/**
*
* H1
*
*/

/* eslint-disable no-unused-vars */
import React, { PropTypes } from 'react';
import styles from './styles.css';

const H1 = (props) => {
  const headingStyle = props.isUpperCase ? styles.h1UpCase : styles.h1;
  return (
    <h1 className={headingStyle} {...props} />
  );
};

H1.propTypes = {
  isUpperCase: PropTypes.bool,
};

export default H1;
