/**
*
* Button
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import classNames from 'classnames';

const Button = (props) => {
  const buttonClasses = classNames(styles.button, styles[props.color], styles[props.size]);
  let button = (
    <button className={buttonClasses}>
      {props.children}
    </button>
  );
  if (props.href) {
    button = <a className={buttonClasses} href={props.href}>{props.children}</a>;
  }
  return button;
};

Button.propTypes = {
  href: PropTypes.string,
  color: PropTypes.oneOf(['green', 'gray', 'pink']),
  size: PropTypes.oneOf(['x-small', 'small', 'large']),
  classNames: PropTypes.array,
  children: PropTypes.node,
};

Button.defaultProps = {
  children: 'Hello!',
  color: 'green',
};

export default Button;
