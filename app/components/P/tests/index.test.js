import P from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<P />', () => {
  it('should render its children', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <P>{children}</P>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
