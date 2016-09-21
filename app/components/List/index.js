/**
*
* List
*
*/

import React, { PropTypes } from 'react';

const List = (props) => {
  if (props.type === 'ordered') {
    return (
      <ol {...props} />
    );
  }
  return (
    <ul {...props} />
  );
};

List.propTypes = {
  type: PropTypes.oneOf([
    'ordered',
    'unordered',
  ]),
};

export default List;
