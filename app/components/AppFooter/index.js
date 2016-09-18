/**
*
* AppFooter
*
*/

import React from 'react';
import styles from './styles.css';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const copyrightText = <FormattedMessage{...messages.copyrightMessage} />;
const authorInfo = <FormattedMessage {...messages.authorMessage} />;

const AppFooter = () =>
  <footer className={styles.appFooter}>
    <p className={styles.authorMessage}>{copyrightText}</p>
    <p className={styles.copyrightMessage}>{authorInfo}</p>
  </footer>;

export default AppFooter;
