/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
 import React from 'react';
 import { defineMessages } from 'react-intl';
 import styles from './styles.css';

 export default defineMessages({
   pageHeadline: {
     id: 'rawstyleguide.containers.HomePage.PageHeader.page_headline',
     defaultMessage: 'The {raw}Guide to Style',
     values: {
       raw: <span className={styles.pink}>Raw</span>,
     },
   },
   pageSubHeadline: {
     id: 'rawstyleguide.containers.HomePage.PageHeader.page_subheadline',
     defaultMessage: 'v1.0.0 - September 2016',
   },
 });
