/*
 *
 * Typography
 *
 */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import H4 from 'components/H4';
import H5 from 'components/H5';
import H6 from 'components/H6';


import styles from './styles.css';

import PageHeader from 'components/PageHeader';

export default class Typography extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const pageHeadline = <FormattedMessage {...messages.pageHeadline} />;
    const pageSubHeadline = <FormattedMessage {...messages.pageSubHeadline} />;
    return (
      <article className={styles.typography}>
        <Helmet
          title="Typography"
          meta={[
            { name: 'description', content: 'Headlines, paragraphs, and anything text-related' },
          ]}
        />
        <PageHeader title={pageHeadline} content={pageSubHeadline} />
        <section className={styles.pageContent}>
          <H4 title="Headlines" />
          <hr />
          <div className={styles.mainContent}>
            <H1 />
            <H1 isUpperCase />
            <H2 />
            <H3 />
            <H4 />
            <H5 />
            <H6 />
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
