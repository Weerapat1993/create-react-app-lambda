import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DatePicker } from '../src/components/DatePicker';
import { Background } from '../src/components/Background';
import md from './datepicker.md';

const stories = storiesOf('Components|DatePicker', module);
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
      <Background padding="10px">
        <DatePicker />
      </Background>
    ), { 
      notes: { markdown: md },
    });
