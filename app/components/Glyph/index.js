/**
*
* Glyphs. This code is for presentation purpose on the StyleGuide.
* If you are looking for rendering the SVG, please refer to components/Icon
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import Icon from 'components/Icon';

const Glyph = (props) =>
  <span className={styles.iconWrapper}>
    <Icon type={props.type} size={props.size} />
    <span className={styles.iconName}>
      {props.type}
    </span>
  </span>;

Glyph.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
};

Glyph.defaultProps = {
  size: 36,
};

export default Glyph;
