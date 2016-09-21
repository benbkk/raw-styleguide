/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import styles from './styles.css';

export default class NotFound extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className={styles.pageNotFound}>
      </article>
    );
  }
}
