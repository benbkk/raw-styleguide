/*
 *
 * Images
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectImages from './selectors';
import styles from './styles.css';

import PageHeader from 'components/PageHeader';
import H1 from 'components/H1';
import P from 'components/P';

export class Images extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article className={styles.images}>
        <Helmet
          title="Images"
          meta={[
            { name: 'description', content: 'Image with Imgix Settings' },
          ]}
        />
        <PageHeader>
          <H1><span className={styles.pink}>Raw</span> Images</H1>
          <P>Image component with Imgix</P>
        </PageHeader>
      </article>
    );
  }
}

const mapStateToProps = selectImages();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);
