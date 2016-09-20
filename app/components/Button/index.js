/**
*
* Button
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import classNames from 'classnames';

const Button = (props) => {
  const buttonClasses = classNames(
    styles.button, props.size, props.color
  );

  let button = (
    <button className={buttonClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
  if (props.href) {
    button = <a className={buttonClasses} href={props.href} onClick={props.onClick}>{props.children}</a>;
  }
  return button;
};

Button.propTypes = {
  href: PropTypes.string,
  fill: PropTypes.bool,
  color: PropTypes.oneOf(['pink', 'grey', 'pink']),
  size: PropTypes.oneOf(['small', 'large']),
  classNames: PropTypes.array,
  children: PropTypes.node,
};

export default Button;
