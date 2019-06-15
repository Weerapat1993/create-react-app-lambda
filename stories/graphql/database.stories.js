import React from 'react';
import { storiesOf } from '@storybook/react';
import { Background } from '../../src/components/Background';
import Page from '../../src/pages';


const stories = storiesOf('GraphQL|Database', module);
  stories
    .add('Products', () => (
      <Page.Products />
    ))
    .add('Categories', () => (
      <Page.Categories />
    ))
    .add('Users', () => (
      <Page.Users />
    ))
