/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageHeader from 'components/PageHeader';
import H1 from 'components/H1';
import P from 'components/P';
import styles from './styles.css';

export default class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <Helmet
          title="The RawGuide to Style | by Rawpixel WebDev"
          meta={[
            { name: 'description', content: 'A React.JS UI Components Library for Rawpixel Ltd. web projects. For internal use only.' },
          ]}
        />
        <PageHeader>
          <H1>The <span className={styles.pink}>Raw</span>Guide to Style</H1>
          <P>v1.0.0 - September 2016</P>
        </PageHeader>
      </article>
    );
  }
}
