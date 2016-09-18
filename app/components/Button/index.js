/**
*
* Button
*
*/

/* eslint no-unused-vars: 0 */
import React, { PropTypes } from 'react';
import styles from './styles.css';
import classNames from 'react-classnames';

const Button = (props) =>
  <button className={styles.button} classNames={[props.color, props.size]}>
    {props.text}
    {props.children}
  </button>;

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'gray',
    'hollow',
  ]),
  size: PropTypes.oneOf([
    'small',
    'large',
    'fullWidth',
    'normal',
  ]),
  text: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  text: 'Button',
  color: 'MintGreen',
  size: 'normal',
};

export default Button;
