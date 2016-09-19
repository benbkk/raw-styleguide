/*
 *
 * Typography
 *
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import H4 from 'components/H4';
import H5 from 'components/H5';
import H6 from 'components/H6';
import P from 'components/P';

import styles from './styles.css';

import PageHeader from 'components/PageHeader';

export default class Typography extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className={styles.typography}>
        <Helmet
          title="Typography"
          meta={[
            { name: 'description', content: 'Headlines, paragraphs, and anything text-related' },
          ]}
        />
        <PageHeader>
          <H1><span className={styles.pink}>Raw</span>Typography</H1>
          <P>Headlines, paragraphs, and anything text-related</P>
        </PageHeader>
        <section className={styles.pageContent}>
          <H4>Headlines</H4>
          <hr />
          <div className={styles.mainContent}>
            <H1>Headline 1</H1>
            <H1 isUpperCase>Headline 1</H1>
            <H2>Headline 2</H2>
            <H3>Headline 3</H3>
            <H4>Headline 4</H4>
            <H5>Headline 5</H5>
            <H6>Headline 6</H6>
          </div>
          <div className={styles.pageAside}>
            <code>
              Code
            </code>
          </div>
        </section>
        <section className={styles.pageContent}>
          <H4>Paragraphs</H4>
          <hr />
          <div className={styles.mainContent}>
            <P isLead>
              This is a paragraph text. A paragraph can be hardcoded into the JSX file and or coming from data sources. If it is preferred, Paragraph component accept <b><em>isLead</em></b> props, which will result in slightly bigger text than other paragraph.
            </P>
            <P>
              <b>This is also a paragraph text</b>, that has <b><em>markups</em></b> in it. The reason is that because at some point we might need to <em>emphasize</em> or <b>bold</b> some text; or even use <b>different text color</b> such as <span className={styles.pink}><b>pink</b></span> or <span className={styles.greenMint}><b>green</b></span>, or even <span className={styles.highLighted}>highlighted.</span>
            </P>
          </div>
          <div className={styles.pageAside}>
            <code>
              Code
            </code>
          </div>
        </section>
      </article>
    );
  }
}
