/*
 *
 * Images
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectImages from './selectors';
import styles from './styles.css';

export class Images extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.images}>
        <Helmet
          title="Images"
          meta={[
            { name: 'description', content: 'Description of Images' },
          ]}
        />
      </div>
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
