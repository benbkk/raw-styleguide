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
   sectionParagraphContent: {
     id: 'app.containers.Typography.sectionParagraphContent',
     defaultMessage: 'This is a paragraph text. A paragraph should not be hardcoded into the JSX file and should be coming from data sources. If it is preferred, Paragraph component accept {isLead} props, which will result in slightly bigger text than other paragraph.',
     values: {
       isLead: <b><em>isLead</em></b>,
     },
   },
 });
