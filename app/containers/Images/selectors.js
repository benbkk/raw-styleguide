import { createSelector } from 'reselect';

/**
 * Direct selector to the images state domain
 */
const selectImagesDomain = () => (state) => state.get('images');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Images
 */

const selectImages = () => createSelector(
  selectImagesDomain(),
  (substate) => substate.toJS()
);

export default selectImages;
export {
  selectImagesDomain,
};
