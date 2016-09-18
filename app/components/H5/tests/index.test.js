import H5 from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<H5 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H5>{children}</H5>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
