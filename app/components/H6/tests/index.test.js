import H6 from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<H6 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H6>{children}</H6>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
