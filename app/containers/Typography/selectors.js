import { createSelector } from 'reselect';

/**
 * Direct selector to the typography state domain
 */
const selectTypographyDomain = () => (state) => state.get('typography');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Typography
 */

const selectTypography = () => createSelector(
  selectTypographyDomain(),
  (substate) => substate.toJS()
);

export default selectTypography;
export {
  selectTypographyDomain,
};
