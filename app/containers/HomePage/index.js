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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PageHeader from 'components/PageHeader';

export default class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const pageHeadline = <FormattedMessage {...messages.pageHeadline} />;
    const pageSubHeadline = <FormattedMessage {...messages.pageSubHeadline} />;
    return (
      <article>
        <Helmet
          title="The RawGuide to Style | by Rawpixel WebDev"
          meta={[
            { name: 'description', content: 'A React.JS UI Components Library for Rawpixel Ltd. web projects. For internal use only.' },
          ]}
        />
        <PageHeader title={pageHeadline} content={pageSubHeadline} />
      </article>
    );
  }
}
