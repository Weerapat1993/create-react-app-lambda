import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button } from 'antd';
import { Background } from '../src/components/Background';

// Options
const typeOptions = {
  Default: '',
  Primary: 'primary',
  Dashed: 'dashed',
  Danger: 'danger',
  Link: 'link',
};

const stories = storiesOf('Ant Design|Button', module);
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
        <Button type={select('Type', typeOptions, 'primary')}>Button</Button>
      </Background>
    ));
