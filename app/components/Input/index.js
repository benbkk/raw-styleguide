/**
*
* Input
*
*/

import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

export default class Input extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  render() {
    return (
      <div className={styles.formGroup}>
        <label
          htmlFor={this.props.id}
          className={styles.controlLabel}
        />
        <input
          className={styles.formControl}
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <p>Value of the input is {this.state.value}</p>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
};
