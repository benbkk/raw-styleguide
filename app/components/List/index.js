/**
*
* List
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';

const List = (props) => {
  if (props.type === 'ordered') {
    return (
      <ol className={styles.listWrapper} {...props} />
    );
  }
  return (
    <ul className={styles.listWrapper} {...props} />
  );
};

List.propTypes = {
  type: PropTypes.oneOf(['ordered', 'unordered']),
};

export default List;
