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
import Glyph from 'components/Glyph';
import Icon from 'components/Icon';

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
            <div className={styles.buttonsWrapper}>
              <p className={styles.buttonSizes}>Small</p>
              <Button size="small" />
              <Button color="pink" size="small" />
              <Button color="gray" size="small" />
            </div>
            <div className={styles.buttonsWrapper}>
              <p className={styles.buttonSizes}>Default</p>
              <Button />
              <Button color="pink" />
              <Button color="gray" />
            </div>
            <div className={styles.buttonsWrapper}>
              <p className={styles.buttonSizes}>Large</p>
              <Button size="large" />
              <Button color="pink" size="large" />
              <Button color="gray" size="large" />
            </div>
          </div>
          <div className={styles.contentAside}>
            Props
          </div>
        </section>
        <section className={styles.pageContent}>
          <H4>Icons</H4>
          <hr />
          <div className={styles.contentMain}>
            <Glyph type="StarLogo" />
            <Glyph type="Star" />
            <Glyph type="Heart" />
            <Glyph type="Code" />
            <Glyph type="LinkTo" />
            <Glyph type="MenuOld" />
            <Glyph type="Menu" />
            <Glyph type="MenuDots" />
            <Glyph type="Search" />
            <Glyph type="Send" />
            <Glyph type="LinkTo" />
            <Glyph type="Stories" />
            <Glyph type="GridView" />
            <Glyph type="ListView" />
            <Glyph type="Facebook" />
            <Glyph type="GooglePlus" />
            <Glyph type="LinkedIn" />
            <Glyph type="Pinterest" />
            <Glyph type="Twitter" />
            <Glyph type="Instagram" />
          </div>
          <div className={styles.contentAside}>
            Props
          </div>
        </section>
        <section className={styles.pageContent}>
          <H4>Button with Icon</H4>
          <hr />
          <div className={styles.contentMain}>
            <Button>
              <Icon type="Facebook" size={16} />
              <span className={styles.buttonText}>Share</span>
            </Button>
            <Button>
              <Icon type="Twitter" size={16} />
              <span className={styles.buttonText}>Tweet</span>
            </Button>
          </div>
          <div className={styles.contentAside}>
            Props
          </div>
        </section>
        <Input />
      </article>
    );
  }
}
