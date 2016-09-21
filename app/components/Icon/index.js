/**
*
* Icon
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import Glyph from 'components/Glyph';

const Icon = (props) =>
  <span className={styles.iconWrapper}>
    <Glyph icon={props.name} size={props.size} />
    <span className={styles.iconName}>
      {props.name}
    </span>
  </span>;

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 36,
};

export default Icon;
