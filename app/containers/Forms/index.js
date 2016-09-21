/*
 *
 * Forms
 *
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styles from './styles.css';

import PageHeader from 'components/PageHeader';
import H1 from 'components/H1';
import H4 from 'components/H4';
import P from 'components/P';
import Button from 'components/Button';
import Input from 'components/Input';

export default class Forms extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className={styles.forms}>
        <Helmet
          title="Forms"
          meta={[
            { name: 'description', content: 'Input types, buttons and other form Elements' },
          ]}
        />
        <PageHeader>
          <H1><span className={styles.pink}>raw</span> Forms</H1>
          <P>Input types, buttons and other form Elements</P>
        </PageHeader>
        <section className={styles.pageContent}>
          <H4>Buttons</H4>
          <hr />
          <div className={styles.contentMain}>
            <Button />
            <Button color="pink" />
          </div>
          <div className={styles.contentAside}>
          </div>
        </section>
        <Input />
      </article>
    );
  }
}
