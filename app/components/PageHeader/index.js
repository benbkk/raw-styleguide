/**
*
* PageHeader
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const PageHeader = (props) =>
  <header className={styles.pageHeader}>
    <div className={styles.innerWrap}>
      {props.children}
    </div>
  </header>;

PageHeader.propTypes = {
  children: PropTypes.node,
};

export default PageHeader;
