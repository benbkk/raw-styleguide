/**
*
* Button
*
*/

import React, { PropTypes, Children } from 'react';
import styles from './styles.css';

import classNames from 'classnames';

const Button = (props) => {
  const buttonClasses = classNames(
    styles.button, props.size, props.color
  );
  if (props.href) {
    button = <a className={buttonClasses} href={props.href} onClick={props.onClick}>{props.label} {Children.toArray(props.children)} </a>;
  }
  let button = <button className={buttonClasses} onClick={props.onClick}>{props.label} {props.children}</button>;
  return button;
};

Button.propTypes = {
  color: PropTypes.oneOf(['pink', 'hollow']),
  size: PropTypes.oneOf(['small', 'large']),
  classNames: PropTypes.array,
  label: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  label: 'Button',
};

export default Button;
