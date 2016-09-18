/**
*
* Paragraph
*
*/

/* eslint-disable no-unused-vars */
import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

const P = (props) => {
  const paragraphStyle = props.isLead ? styles.pLead : styles.p;
  return (
    <p className={paragraphStyle}>
      {props.content}
      {Children.toArray(props.children)}
    </p>
  );
};

P.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  isLead: (props, propName, componentName) => {
    Object.assign({}, props);
  },
};

export default P;
