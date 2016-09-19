/**
*
* Paragraph
*
*/

/* eslint-disable no-unused-vars */
import React, { PropTypes } from 'react';
import styles from './styles.css';

const P = (props) => {
  const paragraphStyle = props.isLead ? styles.pLead : styles.p;
  return (
    <p className={paragraphStyle}>
      {props.children}
    </p>
  );
};

P.propTypes = {
  children: PropTypes.node,
  isLead: PropTypes.bool,
};

export default P;
