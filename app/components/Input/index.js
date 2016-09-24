/**
*
* Input
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const Input = (props) =>
  <div className={styles.formGroup}>
    <label htmlFor={props.id} className={styles.controlLabel}>{props.label}</label>
    <input id={props.id} type={props.type} className={styles.formControl} placeholder={props.placeholder} {...props} />
  </div>;

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
  ]),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: 'Label',
  type: 'text',
};

export default Input;
