/*
 * AppFooter Messages
 *
 * This contains all the text for the AppFooter component.
 */

import React from 'react';
import Glyph from 'components/Glyph';
import { defineMessages } from 'react-intl';

export default defineMessages({
  copyrightMessage: {
    id: 'raw_styleguide.components.Footer.copyright.message',
    defaultMessage: `${'\u00A9'} 2016 Rawpixel Ltd.`,
  },
  authorMessage: {
    id: 'raw_styleguide.components.Footer.author.message',
    defaultMessage: 'Hand {coded} with {love} by Rawpixel WebDev Team. For internal use only.',
    values: {
      coded: <Glyph icon="Code" color="#95a5a6" size={24} />,
      love: <Glyph icon="Heart" color="red" size={16} />,
    },
  },
});
