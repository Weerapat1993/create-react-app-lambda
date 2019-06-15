import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import md from './datepicker.md';
import { Playground } from '../src/components/Playground';

const stories = storiesOf('GraphQL|GraphQL Playground', module);
  // Addons
  stories
    .addDecorator(withKnobs)
    .addParameters({
      backgrounds: [
        { name: 'White', value: '#fff' },
        { name: 'facebook', value: '#3b5998' },
      ],
    })
  stories
    .add('example', () => (
      <Playground
        url="https://kunai-playground.netlify.com/.netlify/functions/graphql"
        visible={boolean('GraphQL Playground', true)} 
        isMobile 
        noButton
        onClose={() => null} 
      />
    ), { 
      notes: { markdown: md },
    });