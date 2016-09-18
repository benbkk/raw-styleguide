/*
* Typography Messages
*
* This contains all the text for the Typography component.
*/
import { defineMessages } from 'react-intl';
import React from 'react';
import styles from './styles.css';

export default defineMessages({
  pageHeadline: {
    id: 'app.containers.Typography.pageHeadline',
    defaultMessage: '{Raw} Typography',
    values: {
      Raw: <span className={styles.pink}>Raw</span>,
    },
  },
  pageSubHeadline: {
    id: 'app.containers.Typography.pageSubHeadline',
    defaultMessage: 'Headlines, paragraphs, and anything text-related',
  },
  sectionHeadlinesTitle: {
    id: 'app.containers.Typography.sectionHeadlinesTitle',
    defaultMessage: 'Headlines',
  },
  sectionParagraphTitle: {
    id: 'app.containers.Typography.sectionParagraphTitle',
    defaultMessage: 'Paragraph',
  },
  sectionParagraphContentLead: {
    id: 'app.containers.Typography.sectionParagraphContentLead',
    defaultMessage: 'This is a paragraph text. A paragraph should not be hardcoded into the JSX file and should be coming from data sources. If it is preferred, Paragraph component accept {isLead} props, which will result in slightly bigger text than other paragraph.',
    values: {
      isLead: <b><em>isLead</em></b>,
    },
  },
  sectionParagraphContent: {
    id: 'app.containers.Typography.sectionParagraphContent',
    defaultMessage: '{boldText}, that has many {boldText2} in it. The reason is that because at some point we might need to {emphasize} or {boldText3} some text; or even use {boldText4} such as {boldPink} or {boldGreenMint}, or even {highlighted} While this is doable, it might be better to find other solution such as {boldText5}.',
    values: {
      boldText: <b>This is another paragraph</b>,
      boldText2: <b><em>rendering variations</em></b>,
      emphasize: <em>emphasize</em>,
      boldText3: <b>bold</b>,
      boldText4: <b>different color </b>,
      boldPink: <b><span className={styles.pink}>pink</span></b>,
      boldGreenMint: <b><span className={styles.greenMint}>green</span></b>,
      highlighted: <span className={styles.highLighted}>highlighted.</span>,
      boldText5: <b><em>markdown</em></b>,
    },
  },
});
