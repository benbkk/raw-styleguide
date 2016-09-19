/**
*
* AppFooter
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import Glyph from 'components/Glyph';

const AppFooter = () =>
  <footer className={styles.appFooter}>
    <p>
      {'\u00A9'} 2016 Rawpixel Ltd.
    </p>
    <p className={styles.authorMessage}>
      Hand <Glyph icon="Code" color="#95a5a6" size={24} /> with <Glyph icon="Heart" color="red" size={16} /> by Rawpixel WebDev Team. For internal use only.</p>
  </footer>;

AppFooter.propTypes = {
  children: PropTypes.node,
};

export default AppFooter;
