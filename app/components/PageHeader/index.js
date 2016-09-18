/**
*
* PageHeader
*
*/

import React, { PropTypes, Children } from 'react';
import styles from './styles.css';
import H1 from 'components/H1';

const PageHeader = (props) =>
  <header className={styles.pageHeader}>
    <div className={styles.innerWrap}>
      <H1 title={props.title} />
      <p>{props.content}</p>
      {Children.toArray(props.children)}
    </div>
  </header>;

PageHeader.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  children: PropTypes.node,
};

export default PageHeader;
