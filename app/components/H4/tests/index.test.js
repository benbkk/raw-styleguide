import H4 from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<H4 />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <H4>{children}</H4>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
