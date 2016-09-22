import expect from 'expect';
import imagesReducer from '../reducer';
import { fromJS } from 'immutable';

describe('imagesReducer', () => {
  it('returns the initial state', () => {
    expect(imagesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
