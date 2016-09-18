/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Children, PropTypes } from 'react';
import Helmet from 'react-helmet';
import AppHeader from 'components/AppHeader';
import AppFooter from 'components/AppFooter';
import styles from './styles.css';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className={styles.appWrapper}>
        <Helmet
          titleTemplate="%s | The RawGuide to Style"
          defaultTitle="The RawGuide to Style | by Rawpixel WebDev"
          meta={[
            { name: 'description', content: 'Rawpixel react UI components library, for internal use only.' },
          ]}
        />
        <AppHeader />
        {Children.toArray(this.props.children)}
        <AppFooter />
      </div>
    );
  }
}
