/**
*
* List
*
*/

import React, { PropTypes } from 'react';
import styles from './styles.css';
import ListItem from 'components/ListItem';

const List = (props) => {
  let content = (<li></li>);
  if (props.items) {
    content = props.items.map((item, index) => (
      <ListItem key={`item=${index}`} item={item} {...props} />
    ));
  } else {
    content = (<ListItem />);
  }

  if (props.type === 'ordered') {
    return (
      <ol className={styles.listWrapper}>
        {content}
      </ol>
    );
  }
  return (
    <ul className={styles.listWrapper}>
      {content}
    </ul>
  );
};

List.propTypes = {
  type: PropTypes.oneOf(['ordered', 'unordered']),
  // component: PropTypes.func,
  items: PropTypes.array,
};

export default List;
