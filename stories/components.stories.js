import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DatePicker } from '../src/components/DatePicker';

const stories = storiesOf('Components|DatePicker', module);
  // Addons
  stories.addDecorator(withKnobs);
  stories
    .add('example', () => (
      <DatePicker />
    ));
